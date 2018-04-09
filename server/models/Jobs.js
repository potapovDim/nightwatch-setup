const createJobModel = mongoose => {
    const jobShema = mongoose.Schema({
      ownerId: String,
      jobDone: Boolean,
      jobAssigner: String, 
      jobName: String,
      executor: String,
      createdAt: String,
      deadline: String
    })
    return mongoose.model('job', jobShema)
}

module.exports = {
  createJobModel
}