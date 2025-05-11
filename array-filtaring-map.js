const people = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Carol", age: 22, gender: "female" },
  { name: "David", age: 35, gender: "male" },
];

const getMaleNames = (arr) => {
  return arr
    .filter(person => person.gender !== "female")
    .map(person => person.name);
};

console.log(getMaleNames(people));