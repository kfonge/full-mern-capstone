const express = require('express')
const router = express.Router()

//routes
router.get('/', (req, res) => {
    res.status(200).json({msg: 'welcome to the app!'})
})

router.post('/sequencebuilder/:id', (req, res) => {
    res.status(200).json({msg: 'add a pose to your sequece builder!'})
})

router.delete('/:id', (req, res) => {
    res.status(200).json({msg: `Delete post! ${req.params.id}`})
})

router.put('/:id', (req, res) => {
    res.status(200).json({msg: `Update sequence ${req.params.id}`})
})

router.post('/poses', (req, res) => {
    console.log('sent post request')
    // res.send({ 'sent post request' })
})


    

module.exports = router