const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()
const logger = require('koa-logger')
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27050')

const testShema = mongoose.Schema({
  name: String
})

const Testmodels = mongoose.model('testModel', testShema)

const tt = new Testmodels({
  name: 'test'
})
tt.save((err) => {
  if(err) console.error(err.message)
  else console.log('Save sucess')
})

const midd = (ctx) => new Promise((resolve,reject) => {
  Testmodels.findOne({}, (err, users) => {
    if(err) console.error(err.message, err.code);
     resolve(users)
      return ctx.body = users
  }).then(users => {console.log(users)
    ctx.body = users})
})

router.get('', midd)

app.use(logger())
app.use(router.routes())

const PORT = 4422

app.listen(PORT)
console.log('server start on port ' + PORT)