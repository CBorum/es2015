const fetch = require('node-fetch')
const mongoose = require('mongoose')
const co = require('co')
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/ex3')

let Joke = mongoose.model('Joke', {joke: String, reference: String})

/*
let newJoke = new Joke({joke: 'foo', reference: 'bar'})
newJoke.save(err => {
    if (err) console.log(err)
    else console.log("saved")
})
*/

co(function*() {
    var larsRes = yield fetch('https://jokes-plaul.rhcloud.com/api/joke')
    var larsJson = yield larsRes.json()
    var chuckRes = yield fetch('http://api.icndb.com/jokes/random')
    var chuckJson = yield chuckRes.json()
    var dbJoke = yield Joke.findOne({})

    return {
        programmerJoke: {
            joke: larsJson.joke,
            reference: larsJson.reference
        },
        chucknorrisJoke: {
            joke: chuckJson.value.joke,
            reference: 'http://api.icndb.com/jokes/random'
        },
        localJoke: {
            joke: dbJoke.joke,
            reference: dbJoke.reference
        }
    }
}).then(res => {
    console.log(res)
})
