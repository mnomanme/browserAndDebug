// 42-7 Explore Localstorage And Session Storage With Json
const idInput = document.getElementById('storage-id');
const valueInput = document.getElementById('storage-value');

const addToLocalStorage = () => {
	const id = idInput.value;
	const value = valueInput.value;

	//
	if (id && value) {
		localStorage.setItem(id, value);
	}
	idInput.value = '';
	valueInput.value = '';
};
