// 41-6 Object types, type and arrow function type

const city: string = 'Dhaka';

const fruits: string[] = ['mango', 'bananna', 'apple'];

const student: { name: string; age: number; salary: number } = {
	name: 'Mohmmad Noman',
	age: 25,
	salary: 4500,
};

type Person = { name: string; age: number; salary: number };

const student2: Person = {
	name: 'Mohmmad Faruque',
	age: 20,
	salary: 2500,
};

const employee: Person = {
	name: 'Abdullah',
	age: 55,
	salary: 47580,
};

function getSalary(player: { name?: string; salary: number }) {
	return player.salary;
}
getSalary({ name: 'Noman', salary: 50 });

function getSalaryTwo(player: Person): number {
	return player.salary;
}
