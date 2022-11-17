const GoalModel = require('../models/Goal')

const index = async (req, res) => {
    try {
        const foundCurrentUsersGoals = await GoalModel.find({ user: req.user })
        res.status(200).json({ goals: foundCurrentUsersGoals })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const add = async (req, res) => {
    try {
        const createdGoalForCurrentUser = await GoalModel.create(req.body) // req.body -->  { notes: '', user: '' }
        res.status(200).json({ goal: createdGoalForCurrentUser })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    index, 
    add
}