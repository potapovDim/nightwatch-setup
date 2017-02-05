const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()
const logger = require('koa-logger')
const mongoose = require('mongoose')
const bodyParser = require('koa-bodyparser')
const cors = require('koa-cors')
const {createUserModel} = require('./models/User')
const {registerUser}  = require('./actions/user')


const connectedMongoose = mongoose.connect('mongodb://127.0.0.1:27050')
const User = createUserModel(connectedMongoose)

router.post('/', registerUser(User))


app.use(bodyParser())
app.use(cors())
app.use(logger())
app.use(router.routes())

const PORT = 4422

app.listen(PORT)
console.log('server start on port ' + PORT)