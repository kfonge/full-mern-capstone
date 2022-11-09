//require mongoose
const mongoose = require('mongoose')

//mongo config function
function mongoConfig() {
 mongoose.connect(process.env.MONGO_DB);
    mongoose.connection.once('open', () => {
        console.log('Connected to MongoDB!')
    })
}

//export so its accessible to server.js
module.exports = mongoConfig
