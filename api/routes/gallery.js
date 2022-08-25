const express = require('express')
const router = express.Router()
const db = require('./db')

router.use(express.json())

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

router.get("/imageName", (req, res) => {
    db.any('SELECT * FROM artworks WHERE name = $1', [req.query.name])
        .then(data => {
            res.json({
                message: data
            })
        })
})

router.get("/imageMedium", (req, res) => {
    db.any('SELECT * FROM artworks WHERE medium = $1', [req.query.medium])
        .then(data => {
            // console.log('DATA:', data)
            res.json({
                message: data
            })
        })
})

// POST endpoints
// router.post("/addArtwork", (req, res) => {
//     db.none('INSERT INTO artworks(name, url, description, medium) VALUES($1, $2, $3, $4)', [req.body.name, req.body.url, req.body.description, req.body.medium])
//         .then(() => {
//             // console.log('DATA:', data)
//             res.json({
//                 message: "Artwork inserted into database."
//             })
//         })
// })

module.exports = router