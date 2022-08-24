const express = require('express')
const router = express.Router()

router.use(express.json())

const pgp = require('pg-promise')()
const db = pgp(process.env.DB_URL)

// GET endpoints
router.get("/", (req, res) => {
    db.any('SELECT * FROM artworks')
        .then(data => {
            // console.log('DATA:', data)
            res.json({
                message: data
            })
        })
})

router.get("/getImageById", (req, res) => {
    res.json({
        message: "This endpoint gets images by ID."
    })
})

router.get("/getImagesByMedium", (req, res) => {
    db.any('SELECT * FROM artworks WHERE medium = $1', [req.body.medium])
        .then(data => {
            // console.log('DATA:', data)
            res.json({
                message: data
            })
        })
})

// POST endpoints
router.post("/addArtwork", (req, res) => {
    db.none('INSERT INTO artworks(name, url, description, medium) VALUES($1, $2, $3, $4)', [req.body.name, req.body.url, req.body.description, req.body.medium])
        .then(data => {
            // console.log('DATA:', data)
            res.json({
                message: "Artwork inserted into database."
            })
        })
})

module.exports = router