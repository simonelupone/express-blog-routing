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
router.put('/:id', (req, res) => {
    res.send(`Update post ${req.params.id}`)
})
// modify
router.patch('/:id', (req, res) => {
    res.send(`Edit part of post ${req.params.id}`)
})
// destroy
router.delete('/:id', (req, res) => {
    res.send(`Delete post ${req.params.id}`)
})


module.exports = router