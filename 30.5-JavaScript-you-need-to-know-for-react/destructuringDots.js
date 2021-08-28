// 30_5-3 Array and object Destructuring and three dots

// array destructing
const numbers = [100, 200];
const x = numbers[0];
const y = numbers[1];
const [a, b] = [300, 400];
const [p, q] = numbers;

console.log(x, y);
console.log(a, b);
console.log(p, q);

function fooo(num1) {
	return [num1, num1 + 10];
}

const fooBox = fooo(8);
const [box1, box2] = fooo(10);

console.log(fooBox);
console.log(box1, box2);

// obejct destructing
const person = { club: 'FC Barcelona', estd: 1900 };

console.log(person.club, person.estd);
console.log(person.club, person.estd);
console.log(person.club, person.estd);

const { name, city } = { id: 1, name: 'Bangladesh', city: 'Dhaka' };

console.log(name, city);

const country = { id: 1, name: 'Bangladesh', city: 'Dhaka', countryCode: 880 };
const { countryCode } = country;

console.log(countryCode);

// create object shortcut

const one = 35;
const two = 25;

const obj = { x: one, y: two };
const obj2 = { one, two };

console.log(obj);
console.log(obj2);

// new array using three dots spread operator
numbers.push(105);

const newNumbers = [...numbers, 45];

console.log(newNumbers);
