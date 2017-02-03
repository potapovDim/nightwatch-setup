const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()
const logger = require('koa-logger')

const PORT = 4422

const midd = (ctx) => new Promise((resolve,reject) => {
  ctx.body = '!_@_!_@!_@!_'
  resolve()
})
router.get('', midd)

app.use(logger())
app.use(router.routes())


app.listen(PORT)
console.log('server start on port ' + PORT)