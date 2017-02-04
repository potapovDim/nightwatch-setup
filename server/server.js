const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()
const logger = require('koa-logger')
const mongoose = require('mongoose')
const bodyParser = require('koa-bodyparser')
const cors = require('koa-cors')
const {equalUser} = require('./utils')



mongoose.connect('mongodb://127.0.0.1:27050')

const testShema = mongoose.Schema({name: String, password: String})

const TestUSerMode = mongoose.model('testModel', testShema)

const passgenerator = () => {
  const string = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890'
  let pass = '';
  const rand = () => parseInt((Math.random() * 55).toFixed(0))
  for(let i =0; i <12; i++){
    pass += string[rand()]
  }
  return pass
}

const getData = ctx => new Promise((resolve, reject) => {
  TestUSerMode.findOne({}, (err, users) => {
    if (err) 
      console.error(err.message, err.code);
    resolve(users)
    return ctx.body = users
  }).then(users => ctx.body = users)
})

router.post('/', async(ctx) => {
  const users = await TestUSerMode.find()
  if(equalUser(users, ctx.request.body)) {
        ctx.status = 404
        ctx.body = {message: 'user already exist'}
  }
  else {
        const pass = passgenerator()
        const newUser = new TestUSerMode({
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