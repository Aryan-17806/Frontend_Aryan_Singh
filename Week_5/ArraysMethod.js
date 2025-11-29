console.log("Task 1: Map → Squares");
const numbers = [2, 3, 4, 5];
const squares = numbers.map(num => num * num);
console.log(squares);


console.log("Task 2: Map → Uppercase Names");
const names = ["ram", "aryan", "gla"];
const upper = names.map(name => name.toUpperCase());
console.log(upper);


console.log("Task 3: Filter → Even Numbers");
const nums = [1, 2, 3, 4, 5, 6];
const evens = nums.filter(n => n % 2 === 0);
console.log(evens);


console.log("Task 4: Filter → Long Names");
const people = ["Abc", "poi", "nmn", "ram"];
const longNames = people.filter(name => name.length >= 5);
console.log(longNames);


console.log("Task 5: Reduce → Sum");
const values = [10, 20, 30, 40];
const sum = values.reduce((total, curr) => total + curr, 0);
console.log(sum);


console.log("Task 6: Reduce → Letter Frequency");
const letters = ["a", "b", "a", "c", "b", "a"];
const frequency = letters.reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
}, {});
console.log(frequency);


console.log("Task 7: forEach → Print Items");
const fruits = ["apple", "banana", "mango"];
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});

console.log("Task 8: forEach → Multiply by 2");
const arr = [1, 2, 3, 4];
arr.forEach(num => console.log(num * 2));
console.log("--------------------------------");


console.log("Task 9: Bonus → Students Passed");
const students = [
    { name: "Anna", score: 45 },
    { name: "Mike", score: 80 },
    { name: "Sara", score: 72 },
    { name: "Tom", score: 50 }
];

const passedNames = students
    .filter(s => s.score >= 60)
    .map(s => s.name);

console.log("Passed Students:", passedNames);
console.log("Total Passed:", passedNames.length);

