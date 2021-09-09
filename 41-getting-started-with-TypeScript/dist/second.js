"use strict";
// 41-3 Basic typescript type number string boolean
// let money = 5000;
// money = '';
// money = false;
// money = 120;
let money = 5000;
const myname = 'Mohammad Noman';
const temperature = true;
// 41-4 Set function parameter type and function return type
const add = (first, second) => {
    const result = first + second;
    return result;
};
const output = add(2, 3);
console.log(output);
// const addOne = (first: number | string, second: number | string): number | string => {
// 	const result: number | string = first + second;
// 	return result;
// };
// const fullName = add('Mohammad', 'Noman');
// console.log(fullName);
function doubleNumber(number) {
    console.log(2 * number);
}
