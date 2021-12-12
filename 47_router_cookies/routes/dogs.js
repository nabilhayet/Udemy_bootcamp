const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("All Dogs")
})
router.post('/', (req, res) => {
    res.send("Creating Dogs")
})

router.get('/:id', (req, res) => {
    res.send(" Viewing ALL Dogs")
})

router.get('/:id/edit', (req, res) => {
    res.send("Editing ALL Dogs")
})

module.exports = router