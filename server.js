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

router.post('/', (ctx) => {
 console.log(ctx.request.body, '!!!!!!!!!!!')
  tt.save((err) => {
    if(err) reject(err);
    else {
      console.log("!!!!!!!!!!!!!!!")
      return ctx.body = 'test data sucess save'
    }
  }).then(data => console.log(data))
})
router.get('/', getData)
app.use(bodyParser())
app.use(logger())
app.use(router.routes())

const PORT = 4422

app.listen(PORT)
console.log('server start on port ' + PORT)