/**
 * Created by ChristopherBorum on 03/11/2016.
 */
function Numbers(numbs) {
    this.nums = numbs;
    let fives = [];
    this.nums.forEach(function (v) {
        if (v % 5 === 0) {
            fives.push(v);
        }
    });
    this.fives = fives
}
var numbers = new Numbers([1, 3, 5, 10, 14, 20, 33, 50]);
console.log(numbers.fives);

var counter = {
    count: 0,
    inc() {
        this.count++;
    }
}
var func = counter.inc;
func();
console.log(counter.count);
counter.inc();
console.log(counter.count);
counter.inc();
console.log(counter.count);
counter.inc();
console.log(counter.count);