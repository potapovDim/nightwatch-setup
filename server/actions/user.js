const {equalUser, passgenerator, testTokenGenerator} = require('../utils')

const registerUser = (User) => async(ctx) => {
  const users = await User.find()
  if (equalUser(users, ctx.request.body)) {
    ctx.status = 404
    ctx.body = {
      message: 'user already exist'
    }
  } else {
    const pass = passgenerator()
    const newUser = new User({name: `${ctx.request.body.name}`, password: pass ,createdAt: new Date().toString()})
    await newUser.save()
    ctx.status = 201
    ctx.body = {
      message: 'user.success.created',
      yourPassword: pass
    }
  }
  return ctx
}


const loginUser = (User) => async(ctx) => {
  const {name, password} = ctx.request.body
  console.log(name, password)
  const user = await User.findOne({name, password})
  if (!user) {
    ctx.status = 404
    ctx.body = {
      message: 'user.does.not.exist'
    }
  } else {
    const id = user._id 
    const token = testTokenGenerator() 
    await User.update({_id: id }, {$set: {token}})
    ctx.status = 200
    ctx.body = {
      id,
      token,
      message: 'ok',
      username: user.name
    }
  }
  return ctx
}

module.exports = {
  registerUser,
  loginUser
}