const books = [
  { title: "Book A", author: "Author 1", year: 2000 },
  { title: "Book B", author: "Author 2", year: 2005 },
  { title: "Book C", author: "Author 3", year: 2010 },
];

const getBookTitles = (arr) => arr.map(book => book.title);

console.log(getBookTitles(books));
