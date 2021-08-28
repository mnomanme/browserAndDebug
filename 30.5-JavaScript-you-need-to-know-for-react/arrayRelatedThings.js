// 30_5-2 Array methods map filter find forEach

const numbers = [9, 4, 5, 7, 8, 23];
const friends = ['Naim', 'Montu', 'Sezan'];
const products = [
	{ id: 1, name: 'laptop', price: 200 },
	{ id: 2, name: 'mobile', price: 300 },
	{ id: 3, name: 'watch', price: 400 },
	{ id: 4, name: 'book', price: 900 },
];

// map
const productsName = products.map((product) => product.name);
const productPrice = products.map((pd) => pd.price);
const price = products.map((pd) => {
	// do some work
	return pd.price;
});
console.log(productsName, productPrice);
console.log(price);

// forEach
products.forEach((pd) => console.log(pd.name));

// filter
const cheaper = products.filter((pd) => pd.price < 500);
console.log(cheaper);

// remove an item using filter
const remaining = products.filter((pd) => pd.id !== 3);
console.log(remaining);

// find
const hasWatch = products.find((pd) => pd.name === 'watch');
console.log(hasWatch);

// reduce

// includes

// push

// pop

// indexOf

// length
