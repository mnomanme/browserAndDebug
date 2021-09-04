// 38-8 (advanced) retrieve local storage value and display them

const productName = document.getElementById('productName');
const products = document.getElementById('products');

const displayLocalStorageCart = () => {
	const cart = getCart();
	for (const product in cart) {
		displayProduct(product);
	}
};

const addItem = () => {
	const nameField = productName.value;
	if (!nameField) {
		return;
	}
	// display in the UI
	displayProduct(nameField);
	// add to local storage
	addProductToCart(nameField);
	// clear
	productName.value = '';
};

const displayProduct = (name) => {
	const li = document.createElement('li');
	li.innerHTML = name;
	products.appendChild(li);
};

const getCart = () => {
	const cart = localStorage.getItem('cart');
	let cartObj;
	if (cart) {
		cartObj = JSON.parse(cart);
	} else {
		cartObj = {};
	}
	return cartObj;
};

const addProductToCart = (name) => {
	const cart = getCart();
	// cart[name] = 1;
	if (cart[name]) {
		cart[name] += 1;
	} else {
		cart[name] = 1;
	}
	console.log(cart);
	const cartStringified = JSON.stringify(cart);
	localStorage.setItem('cart', cartStringified);
};

const placeOrder = () => {
	products.textContent = '';
	localStorage.removeItem('cart');
};

displayLocalStorageCart();
