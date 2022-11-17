const mongoose = require('mongoose')

const Schema = mongoose.Schema

const goalSchema = new Schema({ 
    notes: { type: String, required: true },
    user: { type: String, required: true },
    deadline: {type: String, required: false}
})

const GoalModel = mongoose.model('Goal', todoSchema)

module.exports = TodoModel