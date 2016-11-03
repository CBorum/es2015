/**
 * Created by ChristopherBorum on 31/10/2016.
 */
let promiseFactory = (msg, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                resolve(msg)
            } else {
                reject("rejected")
            }
        }, delay)
    })
}

promiseFactory("foo", 1000)
    .then((res) => {
        console.log(res)
        return promiseFactory("bar", 2000)
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))

function msgAfterTimeout(msg, who, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${msg} Hello ${who}!`), timeout)
    })
}
msgAfterTimeout("", "Foo", 100).then((msg) =>
    msgAfterTimeout(msg, "Bar", 200)
).then((msg) => {
    console.log(`done after 300ms:${msg}`)
})
