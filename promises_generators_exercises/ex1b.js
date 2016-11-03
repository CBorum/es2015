const securebytes = require('./ex1')
const express = require('express')

let app = express()

app.get('/', (req, res) => {
    securebytes.getSecureRandoms((err, json) => {
        if (err)
            console.log(err)
        else
            res.send(JSON.stringify(json))
    })
})

let port = 3000
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})


