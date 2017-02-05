const createUserModel = mongoose => {
    const userShema = mongoose.Schema({name: String, password: String, createdAt: String})
    return mongoose.model('user', userShema)
}

module.exports = {
  createUserModel
}