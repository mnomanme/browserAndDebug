// 29-2 Setup typescript for local project and globally
let myMoney = 500;
myMoney = 100;
myMoney = 0;

// 29-4 Basic typescript type number string boolean
let age: number = 24;
let club: string = 'Real Madrid';
// const isFamous: boolean; // error
let famous: boolean;
famous = true;

console.log(club);

// 29-5 Set function parameter type and function return type
function add(num1: number | string, num2: number | string) {
	return num1 + num2;
}

add(2, 3);
add('Mohammad', 'Noman');
add(24, 'Noman');

function fullName(firstName: string, lastName: string): string {
	return firstName + ' ' + lastName;
}

const user: string = fullName('Abdul', 'Khan');

// 29-6 function void return and arrow function type
function doubleIt(num: number): void {
	const result = num * 2;
	console.log(result);
}

const output = doubleIt(10);
console.log('output', output);

let multiply2: (a: number, b: number) => number;
multiply2 = (a, b) => a * b;

const multiply = (x: number, y: number): number => x * y;
console.log(multiply(20, 6));
