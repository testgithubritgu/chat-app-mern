const express  = require("express")
const { newUser, login } = require("../controller/authController")
const router = express.Router()

router.post('/login', newUser)
router.post('/register', login)
module.exports = router 