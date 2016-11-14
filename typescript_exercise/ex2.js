"use strict";
var burger = 'hamburger', calories = 300, tasty = true;
function speak(food, energy) {
    console.log(`Our ${food} has ${energy} calories`);
}
speak(burger, calories);
function speak2(food) {
    console.log(`Our ${food.name} has ${food.calories} calories`);
}
var ice_cream = {
    name: 'ice cream',
    calories: 200
};
speak2(ice_cream);
class Menu {
    constructor(item_list, total_pages) {
        this.items = item_list;
        this.pages = total_pages;
    }
    list() {
        console.log('our menu for todat');
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    }
}
class HappyMeal extends Menu {
}
const sayHi = require('./exporter');
sayHi();
