const createFriendModel = mongoose => {
    const friendShema = mongoose.Schema({
      ownerId: String,
      name: String,
      lastname: String,
      phone: String,
      social: String
    })
    return mongoose.model('friend', friendShema)
}

module.exports = {
  createFriendModel
}