const albumApi = require('./ex2')
const express = require('express')

let app = express()

app.get('/api/albums/threewords', (req, res) => {
    albumApi.getAlbums((err, json) => {
        if (err)
            res.send(err)
        else
            res.send(json)
    })
})

app.get('/api/albums/:words', (req, res) => {

})

app.all('/', (req, res) => {
    res.send(`<a href="api/albums/threewords">three words</a>
    <a href="api/albums/4">more</a>`)
})

let port = 3000
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})