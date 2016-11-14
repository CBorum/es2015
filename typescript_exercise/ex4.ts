interface IFoo {
    myFunc(a: string, b: string, c: string): Array<string>
}

class Foo implements IFoo {
    myFunc(a: string, b: string, c: string): Array<string> {
        return [a, b, c]
    }
}

class Bar implements IFoo {
    myFunc(a: string, b: string, c: string): Array<string> {
        return [a.toUpperCase(), b.toUpperCase(), c.toUpperCase()]
    }
}

let a = new Foo
console.log(a.myFunc('aa', 'bb', 'cc'))

let b = new Bar
console.log(b.myFunc('aa', 'bb', 'cc'))
let [q, w, e] = b.myFunc('aa', 'bb', 'cc')
console.log(q, w, e)

// let f2 = function logger (f1: myFunc) {
//     let [a, b, c] = ['A', 'B', 'C']
//     console.log(f1(a, b, c))
// }