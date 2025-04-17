const express = require('express')
const router = express.Router()

const posts = require('../posts')

// index
router.get('/', (req, res) => {
    res.json(posts)
})
// show
router.get('/:id', (req, res) => {
    const postId = parseInt(req.params.id)
    // isNan because in js 0 is falsy and letters are truthy
    if (isNaN(postId)) return res.send('Invalid post ID')

    const post = posts.find(post => post.id === postId)
    post ? res.json(post) : res.send('Post not found')
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