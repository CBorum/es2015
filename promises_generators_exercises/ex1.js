const crypto = require('crypto')
const co = require('co')

const lengths = [48, 40, 32, 24, 16, 8]


let bytePromise = (length) => {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(length, (err, buffer) => {
            if (err) {
                reject(err)
            }
            resolve(buffer)
        })
    })
}

let promises = lengths.map(len => bytePromise(len))

module.exports.getSecureRandoms = function(callback) {
    let result = {
        title: "6 secure randoms",
        randoms: []
    }

    Promise.all(promises)
        .then(res => {
            res.forEach((val) => {
                result.randoms.push({'length': val.length, 'random': val.toString('hex')})
            })
            callback(null, result)
        })
        .catch(err => {
            console.log(err)
            callback(err, null)
        })
}

module.exports.getSecureRandoms = function (callback) {
    co(function*() {
        let result = {title: "6 secure randoms", randoms: []}
        let res = yield Promise.all(promises)
        result.randoms = res.map(val => {
            return {length: val.length, random: val.toString('hex')}
        })
        callback(null, result)
    }).catch(err => {
        callback(err, null)
    })
}