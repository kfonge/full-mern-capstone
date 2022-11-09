const express = require("express")
//express app
const app = express()
const mongoConfig = require("./config")
require("dotenv").config()
const yogaRoutes = require("./routes/yogaRoutes")

//middlware
app.use(express.json())
app.use("/poses", yogaRoutes)

//listen for requests
app.listen(process.env.PORT, () => {
  console.log("listening on PORT ", process.env.PORT)
})

mongoConfig()