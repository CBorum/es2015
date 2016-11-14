var burger: string = 'hamburger',
    calories: number = 300,
    tasty: boolean = true

function speak(food: string, energy:number): void {
    console.log(`Our ${food} has ${energy} calories`)
}

speak(burger, calories)

interface Food {
    name: string
    calories: number
}

function speak2(food: Food): void {
    console.log(`Our ${food.name} has ${food.calories} calories`)
}

var ice_cream = {
    name: 'ice cream',
    calories: 200
}

speak2(ice_cream)

class Menu {
    items: Array<string>
    pages: number

    constructor(item_list: Array<string>, total_pages: number) {
        this.items = item_list
        this.pages = total_pages
    }

    list(): void {
        console.log('our menu for todat')
        for (var i = 0; i<this.items.length; i++) {
            console.log(this.items[i])
        }
    }
}

class HappyMeal extends Menu {

}

import sayHi = require('./exporter')
sayHi()