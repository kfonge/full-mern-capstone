const Sequence = require ('../models/Sequence')
const express = require('express')
const router = express.Router()

//routes
router.get('/', (req, res) => {
    res.status(200).json({msg: 'welcome to the app!'})
})

//creating a new sequence for a user
router.post('/sequencebuilder', async (req, res) => {
    //creates a new Sequence following the sequenceModel that uses as input the user response body
    try {
        const createdSequence = await Sequence.create(req.body)
        res.status(200).json(createdSequence)    
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
    
})

router.put('/:id', (req, res) => {
    res.status(200).json({msg: `Update sequence ${req.params.id}`})
})

router.delete('/:id', (req, res) => {
    res.status(200).json({msg: `Delete post! ${req.params.id}`})
})




// router.post('/poses', (req, res) => {
//     console.log('sent post request')
//     // res.send({ 'sent post request' })
// })


    

module.exports = router