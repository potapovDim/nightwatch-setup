


const mongoose = require('mongoose')

const {createUserModel} = require('./User')
const {createJobModel} = require('./Jobs')
const {createFriendModel} = require('./Friend')
const {createRelativeModel} = require('./Relative')

const connectedMongoose = mongoose.connect('mongodb://127.0.0.1:27050')

module.exports = {
  User: createUserModel(connectedMongoose),
  Job: createJobModel(connectedMongoose),
  Friend: createFriendModel(connectedMongoose),
  Relative: createRelativeModel(connectedMongoose)
}