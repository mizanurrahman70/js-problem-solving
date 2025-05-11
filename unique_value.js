const nums = [1, 2, 2, 3, 4, 4, 5];

const getUnique = arr => [...new Set(arr)];

console.log(getUnique(nums));
