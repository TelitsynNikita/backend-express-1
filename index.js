const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.status(200)
    res.send('hello')
    res.end()
})

app.listen(4000, () => {
    console.log('Server started')
})