// 29-2 Setup typescript for local project and globally
let myMoney = 500;
myMoney = 100;
myMoney = 0;

// 29-4 Basic typescript type number string boolean
let age: number = 24;
let club: string = 'Real Madrid';
// const isFamous: boolean; // error
let famous: boolean;

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
