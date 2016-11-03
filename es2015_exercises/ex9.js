class Shape {
    constructor(color) {
        this._color = color;
    }

    getArea() {
        return undefined;
    }

    getPerimeter() {
        return undefined;
    }

    get color() {
        return this._color
    }

    set color(color) {
        this._color = color
    }

    toString() {
        return `${this._color}`
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color)
        this.radius = radius
    }

    toString() {
        return `${this._color}, ${this.radius}`
    }
}

class Cylinder extends Circle {
    constructor(color, radius, height) {
        super(color, radius)
        this.height = height
    }

    toString() {
        return `${this._color}, ${this.radius}, ${this.height}`
    }
}

let shape = new Shape("blue")
console.log(shape.toString())

let circle = new Circle("red", 123)
console.log(circle.toString())

let cylinder = new Cylinder("purple", 123, 234)
console.log(cylinder.toString())