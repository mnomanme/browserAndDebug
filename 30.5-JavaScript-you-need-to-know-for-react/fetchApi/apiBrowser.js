// 30_5-5 Fetch JSON Localstorage object keys values
// JSON
const products = [
	{ id: 1, name: 'laptop', price: 200 },
	{ id: 2, name: 'mobile', price: 300 },
	{ id: 3, name: 'watch', price: 400 },
	{ id: 4, name: 'book', price: 900 },
];

// JSON convert back and forth
const data = JSON.stringify(products);
const dataParse = JSON.parse(data);
console.log(dataParse[0].name);

// FETCH API
// fetch('url')
// 	.then((res) => res.json())
// 	.then((data) => console.log(data));

// local storage
localStorage.setItem('usersId', 1987);
const userId = localStorage.getItem('usersId');
console.log(userId);
localStorage.setItem('products', JSON.stringify(products));
const storedProducts = localStorage.getItem('products');
console.log(storedProducts);
const parseProducts = JSON.parse(storedProducts);
console.log(parseProducts[0].price);

// show keys & values
const keys = Object.keys(parseProducts[0]);
console.log(keys);

const values = Object.values(parseProducts[1]);
console.log(values);
