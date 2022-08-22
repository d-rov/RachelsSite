const express = require('express')
const app = express()

const about = require('./routes/about')

const PORT = process.env.PORT || 3005

app.get("/", (req, res) => {
    res.json({message: "Hello from server"})
})

app.use("/about", about)

app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`)
})