// 41-8 (advanced) class and explore methods private fields

class Car {
	model: string;
	price: number;
	private _milage: number;
	constructor(model: string, price: number) {
		this.model = model;
		this.price = price;
		this._milage = 2000;
	}
	totalPrice(tax: number): number {
		const taxAmount = (this.price * tax) / 100;
		const total = this.price + taxAmount;
		return total;
	}
	actualMilage(): number {
		const realMilage = this._milage + 5000;
		return realMilage;
	}
}

const toyota = new Car('toyota', 100000);
const totalPrice: number = toyota.totalPrice(25);
