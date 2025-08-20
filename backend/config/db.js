
const mongoose = require("mongoose")

exports.dbConnect = async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URL}/justchat`)
        console.log('DB connected.....😎')
    } catch (error) {
        console.log('something wrong in db.......😥',error)
    }
}