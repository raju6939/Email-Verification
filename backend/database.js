const mongoose = require("mongoose");
const connectDatabase = () => {
    
    mongoose.connect("mongodb://localhost:27017/test").then((data) => {
        console.log(`Mongo DB connected with server : ${data.connection.host}`)
    })
}

module.exports = connectDatabase