const {equalUser, passgenerator, testTokenGenerator} = require('../utils')

const addNewJob = (Job, User) => async(ctx) => {
  const users = await Job.findOne()
  const {id, token } = ctx.request.body
  const userExist = User.findOne({_id: id, token})

  if(userExist) {
    const { jobAssigner, jobName, executor, deadline } = ctx.request.body
      const newJob = new Job({ownerId: id , jobAssigner, jobName, executor, deadline ,createdAt: new Date().toString()})
      await newJob.save()
      ctx.status = 201
      ctx.body = {
        message: 'Job success created'
      }
  }
  else {
      ctx.status = 404
      ctx.body = {
        message: 'unauthorized.user'
      }
  }
  return ctx
}

const getJobList = (Job, User) => async(ctx) => {
  const users = await Job.findOne()
  const {id, token } = ctx.request.body
  const userExist = User.findOne({_id: id, token})

  if(userExist) {
    const { jobAssigner, jobName, executor, deadline } = ctx.request.body
      const jobs = await Job.find({ownerId: id})
      ctx.status = 200
      ctx.body = {
        userJobs: jobs
      }
  }
  else {
      ctx.status = 404
      ctx.body = {
        message: 'unauthorized.user'
      }
  }
  return ctx
}

module.exports = {
  addNewJob,
  getJobList
}