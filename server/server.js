const {port} = require('minimist')(process.argv.slice(2))
const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()
const logger = require('koa-logger')
const mongoose = require('mongoose')
const bodyParser = require('koa-bodyparser')
const cors = require('koa-cors')

const {createUserModel} = require('./models/User')
const {createJobModel} = require('./models/Jobs')
const {createFriendModel} = require('./models/Friend')
const {createRelativeModel} = require('./models/Relative')

const {registerUser, loginUser}  = require('./actions/user')
const {addNewJobs, getJobList, deleteJob}  = require('./actions/jobs')
const {addNewFriends, getFriendsList, deleteFriend}  = require('./actions/friends')
const {addNewRelatives, getRelativesList, deleteRelative}  = require('./actions/relatives')

const connectedMongoose = mongoose.connect('mongodb://127.0.0.1:27050')

const User = createUserModel(connectedMongoose)
const Job = createJobModel(connectedMongoose)
const Friend = createFriendModel(connectedMongoose)
const Relative = createRelativeModel(connectedMongoose)

router.post('/', registerUser(User))

router.post('/login', loginUser(User))

router.post('/jobslist', addNewJobs(Job, User))
router.get('/jobslist', getJobList(Job, User))
router.post('/jobdelete', deleteJob(Job, User))

router.post('/friendslist', addNewFriends(Friend, User))
router.get('/friendslist', getFriendsList(Friend, User))
router.post('/frienddelete', deleteFriend(Friend, User))

router.post('/relativelist', addNewRelatives(Relative, User))
router.get('/relativelist', getRelativesList(Relative, User))
router.post('/relativedelete', deleteRelative(Relative, User))

app.use(bodyParser())
app.use(cors())
app.use(logger())
app.use(router.routes())

const PORT = port || 4422

app.listen(PORT)

console.log('server start on port ' + PORT)