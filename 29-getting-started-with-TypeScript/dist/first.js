'use strict';
// WARNING!!! THIS CODE HAS MANY ERRORS
// 29-2 Setup typescript for local project and globally
let myMoney = 500;
myMoney = 100;
myMoney = 0;

// 29-4 Basic typescript type number string boolean
let age = 24;
let club = 'Real Madrid';

// const isFamous: boolean; // error
let famous;
famous = true;
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
let multiply2;
multiply2 = (a, b) => a * b;
const multiply = (x, y) => x * y;
console.log(multiply(20, 6));

// 29-7 set type for array and objects and see the structure of type
const numbers = [2, 3, 5, 6, 7];
numbers.push(30);
const friends = ['Mohammad ', 'Noman', 'Sezan', 'Naim'];
friends.push('Montu');
let megaFriend = '';
for (let i = 0; i < friends.length; i++) {
	const friend = friends[i];
	if (friend.length > megaFriend.length) {
		megaFriend = friend;
	}
}
console.log('Friends with the largest name:', megaFriend);

// object
let player = {
	club: 'Real Madrid',
	payment: 39454879,
};
const friend = {
	name: 'Samuel David',
	age: 39,
};
friend.age = 30;
const messi = {
	name: 'messi',
	club: 'FC Barcelona',
	salary: 4500000,
	wife: true,
};
const ronaldo = {
	name: 'Ronaldo',
	club: 'Real Madrid',
	salary: 40000000,
};
function getBonus(player) {
	return player.salary * 0.1;
}
const poorPlayer = { age: 30, salary: 60 };
getBonus(poorPlayer);
// getBonus(messi);	//error
function getBonus2(player, friends) {
	return player.salary * 0.1;
}
const poorPlayer2 = { age: 30, salary: 60 };
// getBonus2(poorPlayer2);	//error
getBonus2(messi, ['Noman']);

// 29-9 Use type in class and explore private readonly protected
class Person {
	constructor(name, father) {
		this.name = name;
		this._partner = name;
		this.fatherName = father;
	}
	getName() {
		return this.name + '' + this._partner;
	}
}
const sam = new Person('Pod', 'Rude');
console.log('name', sam.name, sam.fatherName);
const sameName = sam.getName();
sam.name = 'Ben';
// sam.fatherName = 'Ben Stoke'; // error can't change
