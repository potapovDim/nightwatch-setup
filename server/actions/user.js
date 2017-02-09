const {equalUser, passgenerator, testTokenGenerator} = require('../utils')

const registerUser = (User) => async(ctx) => {
  const users = await User.find()
  console.log(ctx.request.body)
  if (equalUser(users, ctx.request.body)) {
    ctx.status = 404
    ctx.body = {
      message: 'user already exist'
    }
  } else {
    const pass = passgenerator()
    const newUser = new User({name: `${ctx.request.body.name}`, password: pass ,createdAt: new Date().toString()})
    const a = await newUser.save()
    ctx.status = 201
    ctx.body = {
      message: 'user success created',
      yourPassword: pass
    }
  }
  return ctx
}
const loginUser = (User) => async(ctx) => {
  const {name, password} = ctx.request.body
  console.log(name, password)
  const user = await User.findOne({name, password})
  const id = user._id 
  console.log(user._id)
  if (!user) {
    ctx.status = 404
    ctx.body = {
      message: 'cant login, user does not exist'
    }
  } else {
    const token = testTokenGenerator() 
    await User.update({_id: id }, {$set: {token}})
    ctx.status = 200
    ctx.body = {
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