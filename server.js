const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()
const logger = require('koa-logger')
const mongoose = require('mongoose')
const bodyParser = require('koa-bodyparser')

mongoose.connect('mongodb://127.0.0.1:27050')

const testShema = mongoose.Schema({
  name: String
})

const Testmodels = mongoose.model('testModel', testShema)

const tt = new Testmodels({
  name: 'test'
})

const getData = ctx => new Promise((resolve, reject) => {
  Testmodels.findOne({}, (err, users) => {
    if(err) console.error(err.message, err.code);
     resolve(users)
      return ctx.body = users
  }).then(users => ctx.body = users)
})


const assertPresentUSer = where => {
  return Testmodels.find(where).lean()
}
router.post('/', async (ctx) => {
 console.log(ctx.request.body, 'post Data')
 const user =  await Testmodels.find({name: /^Hello/})
 console.log(user)
 return ctx.body = user
})
router.get('/', getData)


app.use(bodyParser())
app.use(logger())
app.use(router.routes())

const PORT = 4422

app.listen(PORT)
console.log('server start on port ' + PORT)