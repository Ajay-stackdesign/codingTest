
const User = require("../models/userModels")
const cloudinary = require('cloudinary')

exports.register = async (req, res, next) => {
    try {
        const { firstName, lastName, email, phoneNo, gender } = req.body
        console.log(req.body)

        let user = await User.findOne({ email })
        if (user) {
            return res.status(500).json({
                success: false,
                message: "User already Exits"
            })
        }
        const myCloud = await cloudinary.v2.uploader.upload(avatar, {
            folder: "avatars",
        });
        user = await User.create({
            firstName, lastName, email, phoneNo, gender,

            avatar: { public_id: myCloud.public_id, url: myCloud.secure_url },
        })
        res.status(201).json({
            success: true,
            user,
        })
    } catch (err) {
        res.status(500).json(err)
    }
}