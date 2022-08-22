const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.json({
        message: "This is the gallery page. This endpoint will get all images"
    })
})

router.get("/getImageById", (req, res) => {
    res.json({
        message: "This endpoint gets images by ID."
    })
})

router.get("/getImagesByMedium", (req, res) => {
    res.json({
        message: "This endpoint get images by media type."
    })
})

module.exports = router