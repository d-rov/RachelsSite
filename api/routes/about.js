const express = require('express')
const router = express.Router()

// THIS IS UNUSED FOR NOW

router.get("/", (req, res) => {
    res.json({
        message: "This is Rachel's about page."
    })
})

module.exports = router