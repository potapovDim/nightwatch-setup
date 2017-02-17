const createRelativeModel = mongoose => {
    const relativeShema = mongoose.Schema({
      ownerId: String,
      name: String,
      lastname: String,
      phone: String,
      address: String
    })
    return mongoose.model('relative', relativeShema)
}

module.exports = {
  createRelativeModel
}