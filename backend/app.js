const express = require("express")

const app = express()
const fileUpload = require('express-fileupload')

// middlewares
app.use(express.json({ limit: "50mb" }))
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(fileUpload())

const userRoutes = require("./routes/userRoutes")

app.use("/api/v1", userRoutes)

module.exports = app