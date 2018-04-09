const router = require('koa-router')()

const {registerUser, loginUser, whoAmI}  = require('./actions/user')
const {addNewJobs, getJobList, deleteJob}  = require('./actions/jobs')
const {addNewFriends, getFriendsList, deleteFriend}  = require('./actions/friends')
const {addNewRelatives, getRelativesList, deleteRelative}  = require('./actions/relatives')

const {User, Job, Friend, Relative} = require('./models')

router.post('/', registerUser(User))
router.get('/whoami', whoAmI(User))
router.post('/login', loginUser(User))
router.post('/jobslist', addNewJobs(Job, User))
router.post('/jobdelete', deleteJob(Job, User))
router.post('/friendslist', addNewFriends(Friend, User))
router.post('/frienddelete', deleteFriend(Friend, User))
router.post('/relativelist', addNewRelatives(Relative, User))
router.post('/relativedelete', deleteRelative(Relative, User))

router.get('/jobslist', getJobList(Job, User))
router.get('/friendslist', getFriendsList(Friend, User))
router.get('/relativelist', getRelativesList(Relative, User))

module.exports = function () {
  return router.routes()
}