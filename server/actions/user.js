const {equalUser, passgenerator} = require('../utils')

const registerUser = (User) => async(ctx) => {
  const users = await User.find()
  if(equalUser(users, ctx.request.body)) {
        ctx.status = 404
        ctx.body = {message: 'user already exist'}
  }
  else {
        const pass = passgenerator()
        const newUser = new User({
            name: `${ctx.request.body.name}`, password: pass
          })
        const a = await newUser.save()
        ctx.status = 201
        ctx.body = {
          message:'user success created',
          yourPassword : pass
        }
  }
  return ctx
}


module.exports = {
  registerUser
}