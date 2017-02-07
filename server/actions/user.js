const {equalUser, passgenerator} = require('../utils')

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
    const newUser = new User({name: `${ctx.request.body.name}`, password: pass})
    const a = await newUser.save()
    ctx.status = 201
    ctx.body = {
      message: 'user success created',
      yourPassword: pass
    }
  }
  return ctx
}

const loginUser = (User, where) => async(ctx) => {
  const user = await User.findOne(where)

  if (!user) {
    ctx.status = 403
    ctx.body = {
      message: 'cant login, user does not exist'
    }
  } else {
    ctx.status = 200
    ctx.body = {
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