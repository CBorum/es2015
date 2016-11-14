function describe(book) {
    console.log(book.title, book.author, book.published, book.pages);
}
var book = {
    title: 'qwer',
    author: 'asdf',
    published: new Date(),
    pages: 123
};
var book2 = {
    title: 'qwer',
    author: 'asdf'
};
describe(book);
describe(book2);
// if the object implement the same fields and methods as the interface it can be used as that interface
// if it looks like a duck => if it has same fields
// if it swims and quacks like a duck => same methods/functions
// then it probably is a duck => the object can be used as the interface
