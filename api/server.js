const express = require('express')
const app = express()

require('dotenv').config()

// const about = require('./routes/about')
const gallery = require('./routes/gallery')
const contact = require('./routes/contact')

const PORT = process.env.PORT || 3005

app.get("/", (req, res) => {
    res.json({message: "Hello from server"})
})

// app.use("/about", about)
app.use("/gallery", gallery)
app.use("/contact", contact)

app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`)
})