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

// 29-7 set type for array and objects and see the structure of type

const numbers: number[] = [2, 3, 5, 6, 7];
numbers.push(30);

const friends: string[] = ['Mohammad ', 'Noman', 'Sezan', 'Naim'];
friends.push('Montu');

let megaFriend: string = '';

for (let i = 0; i < friends.length; i++) {
	const friend: string = friends[i];
	if (friend.length > megaFriend.length) {
		megaFriend = friend;
	}
}

console.log('Friends with the largest name:', megaFriend);

// object

let player: {
	club: string;
	payment: number;
} = {
	club: 'Real Madrid',
	payment: 39454879,
};

const friend: { name: string; age: number } = {
	name: 'Samuel David',
	age: 39,
};

friend.age = 30;

// 29-8 Typescript Interface and use complex parameter type
interface Player {
	name: string;
	club: string;
	salary: number;
	wife?: boolean;
}

const messi: Player = {
	name: 'messi',
	club: 'FC Barcelona',
	salary: 4500000,
	wife: true,
};

const ronaldo: Player = {
	name: 'Ronaldo',
	club: 'Real Madrid',
	salary: 40000000,
};

function getBonus(player: { age: number; salary: number }) {
	return player.salary * 0.1;
}

const poorPlayer = { age: 30, salary: 60 };

getBonus(poorPlayer);
// getBonus(messi);	//error

function getBonus2(player: Player, friends: string[]) {
	return player.salary * 0.1;
}

const poorPlayer2 = { age: 30, salary: 60 };

// getBonus2(poorPlayer2);	//error
getBonus2(messi, ['Noman']);
