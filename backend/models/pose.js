const mongoose = require('mongoose')
const Schema = mongoose.Schema

const poseSchema = new Schema({
    name: { type: String, required: true },
    id: {type: Number, required: true},
    image: { type: String, required: true },
    description: { type: String, required: true},
    note: { type: String, required: false}
})

const Pose = mongoose.model('Pose', poseSchema)

module.exports = Pose