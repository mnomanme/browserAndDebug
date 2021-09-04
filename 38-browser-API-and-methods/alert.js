// 38-2 Browser alert, confirm, prompt with examples

console.log('alert');

alert('MOM is coming!!!');

const alertComing = () => {
	alert(`I am out of the door. Please open the door`);
};

const askPicnic = () => {
	const response = confirm(`Are you going to Picnic?`);
	console.log(response);
	if (response === true) {
		alert('Send your money in Bkash');
	} else {
		alert('Go to Bandarban');
		console.log('go to bandarban');
	}
};

const askName = () => {
	const name = prompt('What is your name?');
	console.log(name);
	if (name) {
		console.log(name);
	}
};
