const express = require("express")
const bodyParser = require("body-parser")
//express app
const app = express()

require("dotenv").config()
const yogaRoutes = require("./routes/yogaRoutes")

//middlware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/", require("./routes/yogaRoutes"))
app.use("/poses", require("./routes/yogaRoutes"))

//listen for requests
app.listen(process.env.PORT, () => {
  console.log("listening on PORT ", process.env.PORT)
})
