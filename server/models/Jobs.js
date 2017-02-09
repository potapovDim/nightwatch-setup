const createJobModel = mongoose => {
    const jobShema = mongoose.Schema({
      jobAssigner: String, 
      name: String,
      executor: String,
      createdAt: String,
      deadline: String
    })
    return mongoose.model('job', jobShema)
}

module.exports = {
  createJobModel
}