const { equalUser, passgenerator, testTokenGenerator } = require('../utils')

const addNewJobs = (Job, User) => async(ctx) => {
    const { id, token } = ctx.request.headers
    const userExist = await User.findOne({ _id: id, token })
    if (userExist) {
        const { jobs } = ctx.request.body
        console.log(jobs)
        for(const {_id ,jobAssigner, jobName, executor, deadline, jobDone} of jobs) {
            const jobExist = await Job.findOne({_id, ownerId: id})
            if(jobExist) {
                continue
            }
            else {
                await Job({ownerId: id, jobAssigner, jobName, executor, jobDone ,deadline, createdAt: new Date().toString()}).save()
            }
        }
        ctx.status = 201
        ctx.body = {
            message: 'Job success created'
        }
    } else {
        ctx.status = 404
        ctx.body = {
            message: 'unauthorized.user'
        }
    }
    return ctx
}

const getJobList = (Job, User) => async(ctx) => {
    const { id, token } = ctx.request.headers
    const userExist = await User.findOne({ _id: id, token })
    if (userExist) {
        const { jobAssigner, jobName, executor, deadline } = ctx.request.body
        const jobs = await Job.find({ ownerId: id })
        ctx.status = 200
        ctx.body = {
            userJobs: jobs
        }
    } else {
        ctx.status = 404
        ctx.body = {
            message: 'unauthorized.user'
        }
    }
    return ctx
}

module.exports = {
    addNewJobs,
    getJobList
}