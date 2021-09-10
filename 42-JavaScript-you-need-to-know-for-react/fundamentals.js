// 42-1 Six JavaScript Fundamentals that you need to know

// 1. How to declare a variable using let and const
const fatherName = 'Abdul Khaleuque';
let season = 'rainy';
season = 'winter';

// 2. conditions
// 6 basic conditions: >,<, ===, !==, <=, >=
// multiple conditions: &&, ||

if (fatherName === 'Abdul' || season === 'rainy') {
} else if (fatherName === 'Abdul') {
} else {
}

// 3. array declare
// index,
// length, push,
const numbers = [89, 35, 98, 12];
numbers[0] = 56;

// 4. for loop
for (let i = 0; i < numbers.length; i++) {
	const number = numbers[i];
	confirm.log(number);
}

// 5. function
const multiply = (num1, num2) => {
	const result = num1 * num2;
	return result;
};

const output = multiply(35, 78);

// 6. Object
// 3 ways to access property by name
const student = {
	name: 'Mohammad Noman',
	age: 32,
	movies: ['The Book Thief', 'LOST'],
};

const myVariable = 'age';

console.log(student.age); // direct by property
console.log(student['age']); // access via property name string
console.log(student[myVariable]); // access via property name in a variable
