const addNewFriends = (Friend, User) => async(ctx) => {
    const { id, token } = ctx.request.headers
    const userExist = await User.findOne({ _id: id, token })
    if (userExist) {
        const { friends } = ctx.request.body
        for(const {_id , name, lastname, phone, social} of friends) {
            const jobExist = await Job.findOne({_id, ownerId: id})
            if(jobExist) {
                continue
            }
            else {
                await Friend({ownerId: id, name, lastname, phone, social}).save()
            }
        }
        ctx.status = 201
        ctx.body = {
            message: 'Friend success created'
        }
    } else {
        ctx.status = 404
        ctx.body = {
            message: 'unauthorized.user'
        }
    }
    return ctx
}

const getFriendsList = (Friend, User) => async(ctx) => {
    const { id, token } = ctx.request.headers
    const userExist = await User.findOne({ _id: id, token })
    if (userExist) {
        const friends = await Friend.find({ ownerId: id })
        ctx.status = 200
        ctx.body = {
            userFriends: friends
        }
    } else {
        ctx.status = 404
        ctx.body = {
            message: 'unauthorized.user'
        }
    }
    return ctx
}

const deleteFriend = (Friend, User) => async(ctx) => {
    const { id, token } = ctx.request.headers
    const userExist = await User.findOne({ _id: id, token })
    if (userExist) {
        const { friend: {_id, ownerId}} = ctx.request.body
        await Friend.findOneAndRemove({_id , ownerId })
        ctx.status = 200
        ctx.body = {
            ok: 1
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
    addNewFriends,
    getFriendsList,
    deleteFriend
}
