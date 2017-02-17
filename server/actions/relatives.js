const addNewRelatives = (Relative, User) => async(ctx) => {
    const { id, token } = ctx.request.headers
    const userExist = await User.findOne({ _id: id, token })
    if (userExist) {
        const { relatives } = ctx.request.body
        for(const {_id , name, lastname, phone, address} of relatives) {
            const relativeExist = await Relative.findOne({_id, ownerId: id})
            if(relativeExist) {
                continue
            }
            else {
                await Relative({ownerId: id, name, lastname, phone, address}).save()
            }
        }
        ctx.status = 201
        ctx.body = {
            message: 'Relative success created'
        }
    } else {
        ctx.status = 404
        ctx.body = {
            message: 'unauthorized.user'
        }
    }
    return ctx
}

const getRelativesList = (Relative, User) => async(ctx) => {
    const { id, token } = ctx.request.headers
    const userExist = await User.findOne({ _id: id, token })
    if (userExist) {
        const relatives = await Relative.find({ ownerId: id })
        ctx.status = 200
        ctx.body = {
            userRelatives: relatives 
        }
    } else {
        ctx.status = 404
        ctx.body = {
            message: 'unauthorized.user'
        }
    }
    return ctx
}

const deleteRelative = (Relative, User) => async(ctx) => {
    const { id, token } = ctx.request.headers
    const userExist = await User.findOne({ _id: id, token })
    if (userExist) {
        const { relative: {_id, ownerId}} = ctx.request.body
        await Relative.findOneAndRemove({_id , ownerId })
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
    addNewRelatives,
    getRelativesList,
    deleteRelative
}
