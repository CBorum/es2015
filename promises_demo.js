var p = Promise.resolve(42);
p.then(res => console.log(res));

var p2 = new Promise((resolve, reject) => resolve(5));
p2.then((val) => console.log(val));

p2.then((val) => console.log(`fulfilled: ${val}`),
        (err) => console.log(`rejected: ${err}`));

var p3 = new Promise((resolve, reject) => {
    if (true)
        throw new Error("rejected! p3");
    else
        resolve(4);
});

p3.then((val) => val + 2)
    .then((val) => console.log("got", val))
    .catch((err) => console.log(`error: ${err.message}`));

var p4 = new Promise((resolve, reject) => {
    resolve(4)
});

p4.then((val) => val + 2)
    .then((val) => {throw new Error("step 2 failed!") })
    .then((val) => console.log("got", val))
    .catch((err) => console.log("error p4 ", err.message))


