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
router.post('/', (req, res) => {
    res.send('Store new post')
})
// update

// modify

// destroy

module.exports = router