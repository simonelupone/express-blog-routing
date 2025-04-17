const express = require('express')
const router = express.Router()

// index
router.get('/', (req, res) => {
    res.send('Posts list')
})
// show
router.get('/:id', (req, res) => {
    res.send(`Post ${req.params.id}`)
})
// store

// update

// modify

// destroy

module.exports = router