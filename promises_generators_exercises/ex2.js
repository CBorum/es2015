let fetch = require('node-fetch')
let co = require('co')
const baseUrls = 'https://jsonplaceholder.typicode.com/photos'

const ids = [1, 3, 5, 7, 9]

let albumUrls = ids.map((val) => `${baseUrls}?albumId=${val}`)

/*
module.exports.getAlbums = (callback) => {
    Promise.all(albumUrls.map(url => fetch(url).then(res => res.json())))
        .then(jsonArray => {
            jsonArray.forEach((json, index) => {
                jsonArray[index] = json.filter(val => {
                    if (val.title.split(' ').length === 3) {
                        return val
                    }
                })
            })
            callback(null, jsonArray)
        })
        .catch(err => callback(err, null))
}
*/
module.exports.getAlbums = (callback) => {
    co(function*() {
        let proms = albumUrls.map(url => fetch(url))
        let albumsVal = yield Promise.all(proms)
        let foo = albumsVal.map(val => val.json())
        let albumsJson = yield Promise.all(foo)
        albumsJson.forEach((json, index) => {
            albumsJson[index] = json.filter(val => {
                if (val.title.split(' ').length === 3) {
                    return val
                }
            })
        })
        callback(null, albumsJson)
    }).catch(err => callback(err, null))
}
