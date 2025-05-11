const students = [
  { name: "Sam", grades: [90, 85, 80] },
  { name: "Jane", grades: [70, 75, 65] },
  { name: "Mike", grades: [95, 90, 100] },
];

students.sort((a, b) => {
  const avgA = a.grades.reduce((sum, g) => sum + g, 0) / a.grades.length;
  const avgB = b.grades.reduce((sum, g) => sum + g, 0) / b.grades.length;
  return avgB - avgA;
});

console.log(students);
