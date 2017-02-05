const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()
const logger = require('koa-logger')
const mongoose = require('mongoose')
const bodyParser = require('koa-bodyparser')
const cors = require('koa-cors')
const {equalUser, passgenerator} = require('./utils')
const {createUserModel} = require('./models/User')



const connectedMongoose = mongoose.connect('mongodb://127.0.0.1:27050')
const User = createUserModel(connectedMongoose)

const getData = ctx => new Promise((resolve, reject) => {
  User.findOne({}, (err, users) => {
    if (err) 
      console.error(err.message, err.code);
    resolve(users)
    return ctx.body = users
  }).then(users => ctx.body = users)
})

router.post('/', async(ctx) => {
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
})
router.get('/', getData)

app.use(bodyParser())
app.use(cors())
app.use(logger())
app.use(router.routes())

const PORT = 4422

app.listen(PORT)
console.log('server start on port ' + PORT)