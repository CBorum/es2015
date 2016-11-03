let evens = [2, 4, 6, 8, 12, 14, 22, 24];
let odds = evens.map(v => v + 1)
let pairs = evens.map(v => ({even: v, odd: v + 1}))
let nums = evens.map((v, i) => v + i)

console.log(odds)
console.log(pairs)
console.log(nums)
