// 30_5-1 Five JavaScript Fundamentals that you need to know

// variable: let, const

let money = 100;
money = 30;

const name = 'Mohammad Noman';

const isConfident = false;

const person = {
	name: 'Mohammad Faruque',
	age: 20,
	city: 'Dhaka',
};

const statement = `This person name ${name} and his age is ${person.age}`;

// condition

if (money > 40 && money >= 90) {
} else {
}

// array
const numbers = [12, 24, 45, 5];
const friends = ['montu', 'sezan', 'naaim'];
const products = [
	{ name: 'mobile', price: 300 },
	{ name: 'laptop', price: 3422 },
	{ name: 'watch', price: 77 },
];

// loop : for loop

for (let i = 0; i < numbers.length; i++) {
	const number = numbers[i];
}

// function regular, arrow

function add(num1, num2) {
	return num1 + num2;
}
const result = add(39, 4);

// arrow
const fiveTimes = (num) => num * 5;
const multiple = (num1, num2) => num2 * num1;
const doMath = (a, b) => {
	const total = a + b;
	return total * 10;
};
