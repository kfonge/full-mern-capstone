const Pose = require('../models/pose')

// ROUTE      GET /allposes    (get all poses)

// const getAllPoses = () => {

// }
// ROUTE     POST /newpose     (create)
const createPose = (req, res) => {
  
    // Create has two arguments:
    //   1st: the data we want to send
    //   2nd: callback function

    //
    Pose.create(req.body, (err, createdPose) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/poses')
        }
    })
}
// // ROUTE (show one pose)
// const showPose = () => {
    
// }
// ROUTE      POST /sequencebuilder    (add new pose to sequence)
// ROUTE      DELETE /remove
// ROUTE      GET /pose/new    (edit sequence?)

module.exports = createPose