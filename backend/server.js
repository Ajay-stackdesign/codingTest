const app = require("./app")

const dotenv = require("dotenv")
const cloudinary = require("cloudinary")

dotenv.config({ path: "backend/config/.env" })

const database = require("./config/database")



database()


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});



app.listen(`${process.env.PORT}`, () => {
    console.log(`server is connected to ${process.env.PORT}`)
})