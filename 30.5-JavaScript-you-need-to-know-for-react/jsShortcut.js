// 30_5-4 JS shortcut Ternary default parameter and or
const money = 400;
const active = true;
let food;

if (money > 200) {
	food = 'Biriyani';
} else {
	food = 'Burger';
}

// ternary operator
// condition ? true value : false value
let shop = money > 300 ? 'Bat' : 'Ball';

let cssClass;
if (active === true) {
	cssClass = 'active';
} else {
	cssClass = 'inactive';
}

const cssClass2 = active ? 'active' : 'inactive';

// function call shortcut alternative
// active ? displayUser() : hideUser();

//
// active && displayUser();
// active || hideUser();

const x = active && 5;
const y = active || 100;

console.log(x);
console.log(y);

// string to number
const number = +'4764';
console.log(number);

// number to string

const numText = 45 + '';
console.log(numText);

// function default value
function add(num1, num2 = 5) {
	// num2 = num2 || 5;
	return num1 + num2;
}

add(20, 10);
