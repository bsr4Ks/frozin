import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
})

userSchema.pre('save', async function (next) {
    try {
        const existingUser = await mongoose.models.User.findOne({
            username: this.username
        })
        if (existingUser) {
            const err = new Error('User with this username is aldready exists.')
            err.statusCode = 400
            return next(err)
        }
        next()

    } catch (err) {
        next(err)
    }
})


export const User = new mongoose.model("User", userSchema)
