const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.json({
        message: "This is the contact page."
    })
})

router.post("/send", (req, res) => {
    console.log("posting a contact message")
    res.json({
        message: "this is a POST endpoint"
    })
})

module.exports = router