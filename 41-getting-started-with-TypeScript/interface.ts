// 41-7 (advanced) Interface and extend interfaces

interface Player {
	name: string;
	club: string;
	salary: number;
	wife?: string;
	previousHistory?: string[];
}

const team: Player = {
	name: 'Bangladesh',
	club: 'International',
	salary: 3848734,
	wife: 'Not Married',
};

const nasir: Player = {
	name: 'Bangladesh U19',
	club: 'Home',
	salary: 900,
	wife: 'Moyna',
};

interface Employee {
	name?: string;
	designation?: string;
	salary?: number;
	age?: number;
}

interface Developer extends Employee {
	language: string;
	codeEditor: string;
	typingSpeed: number;
}

const anonymous: Developer = {
	language: 'OOP',
	codeEditor: 'Code Blocks',
	typingSpeed: 90,
};
