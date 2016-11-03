/**
 * Created by ChristopherBorum on 03/11/2016.
 */

/* commented for ex8
function f(x, y, ...rest) {
    let sum = `Sum: ${x + y}`
    let resp = rest.map((val, index) => {
        return `\nrest value ${index + 1} is a ${val.constructor.name}`
    })
    return sum + resp
}

console.log(f(5, 2, true, 2, "hello World", [1, 2, 3], new Date(), {}));

var rest = [true, 2, "hello World", [1, 2, 3], new Date(), {}];
var restParams = [...rest];
console.log(f(5, 2, ...restParams));

var chars = [... f(5, 2, restParams)];
console.log(chars)
*/

module.exports.f = function(x, y, ...rest) {
    let sum = `Sum: ${x + y}`
    let resp = rest.map((val, index) => {
        return `\nrest value ${index + 1} is a ${val.constructor.name}`
    })
    return sum + resp
}