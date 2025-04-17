const express = require('express')
const app = express()
const port = 3000

const postsRouter = require('./routers/posts.js')
app.use('/posts', postsRouter)

app.get('/', (req, res) => {
    res.send('My posts')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})