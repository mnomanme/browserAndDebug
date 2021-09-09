// 41-3 Basic typescript type number string boolean

// let money = 5000;
// money = '';
// money = false;
// money = 120;

let money: number = 5000;
const myname: string = 'Mohammad Noman';
const temperature: boolean = true;

// 41-4 Set function parameter type and function return type

const add = (first: number, second: number): number => {
	const result = first + second;
	return result;
};

const output: number = add(2, 3);

console.log(output);

// const addOne = (first: number | string, second: number | string): number | string => {
// 	const result: number | string = first + second;
// 	return result;
// };

// const fullName = add('Mohammad', 'Noman');

// console.log(fullName);

function doubleNumber(number: number): void {
	console.log(2 * number);
}
