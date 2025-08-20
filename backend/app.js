const express = require("express")
const app = express()
require("dotenv").config()
app.use(express.json())
const {chats} = require("./data/dummy")
const port = process.env.PORT || 5001
const authRoute = require("./routes/authRoutes")
const cors = require("cors")
const { dbConnect } = require("./config/db")
app.use(cors())

app.use("/api/auth", authRoute)


dbConnect().then(()=>{

    app.listen(port , ()=>{
        console.log('server started on port 5001.....🤩')
    })
})