const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("ALL Shelters")
})

router.post('/', (req, res) => {
    res.send("Creating Shelters")
})

router.get('/:id', (req, res) => {
    res.send(" Viewing ALL Shelters")
})

router.get('/:id/edit', (req, res) => {
    res.send("Editing ALL Shelters")
})

module.exports = router 