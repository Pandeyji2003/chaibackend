require('dotenv').config()
const express = require('express')

const app = express()

const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('pandyedotcom')
})

app.get('/instagram', (req, res) => {
    res.send('pandyedotcom')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at pandeydotcom</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('https://www.youtube.com/@pandyedotcom')
})  


app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening on port ${port}`)
})