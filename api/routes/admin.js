const express = require('express')
const router = express.Router()

router.use(express.json())

const pgp = require('pg-promise')()
const db = pgp(process.env.DB_URL)

// POST endpoints
router.post("/addArtwork", (req, res) => {
    db.none('INSERT INTO artworks(name, url, description, medium) VALUES($1, $2, $3, $4)', [req.body.name, req.body.url, req.body.description, req.body.medium])
        .then(() => {
            // console.log('DATA:', data)
            res.json({
                message: "Artwork inserted into database."
            })
        })
})

module.exports = router