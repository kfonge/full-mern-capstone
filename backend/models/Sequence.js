//here im using a one-to-many

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sequenceSchema = new Schema({
    user_id: { type: String, required: true },
    sequenceItems: { type: Array, required: true},
    sequenceName: { type: String, required: true},
    trainerNote: { type: String, required: false}
})

const Sequence = mongoose.model('Sequence', sequenceSchema)

module.exports = Sequence