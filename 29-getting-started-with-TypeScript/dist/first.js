"use strict";
// 29-2 Setup typescript for local project and globally
let myMoney = 500;
myMoney = 100;
myMoney = 0;
// 29-4 Basic typescript type number string boolean
let age = 24;
let club = 'Real Madrid';
// const isFamous: boolean; // error
let famous;
console.log(club);
// 29-5 Set function parameter type and function return type
function add(num1, num2) {
    return num1 + num2;
}
add(2, 3);
add('Mohammad', 'Noman');
add(24, 'Noman');
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
const user = fullName('Abdul', 'Khan');
// 29-6 function void return and arrow function type
function doubleIt(num) {
    const result = num * 2;
    console.log(result);
}
const output = doubleIt(10);
console.log('output', output);
