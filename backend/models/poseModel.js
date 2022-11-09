/*options to decide
- one-to-many relationship, two schemas
- put the sequences in the front end and send an array of chosen poses to the backend
*/
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const poseSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true},
    trainerNote: { type: String, required: false}
})

const Pose = mongoose.model('Pose', poseSchema)

module.exports = Pose