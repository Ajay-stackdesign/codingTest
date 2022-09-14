const mongoose = require("mongoose")


const database = () => {
    mongoose.connect(`mongodb://localhost:27017/coding__round`, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("connected to database")
        }).catch((err) => {
            console.log(err)
        })
}

module.exports = database