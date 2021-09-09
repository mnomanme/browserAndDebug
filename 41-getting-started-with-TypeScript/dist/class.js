"use strict";
// 41-8 (advanced) class and explore methods private fields
class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
        this._milage = 2000;
    }
    totalPrice(tax) {
        const taxAmount = (this.price * tax) / 100;
        const total = this.price + taxAmount;
        return total;
    }
    actualMilage() {
        const realMilage = this._milage + 5000;
        return realMilage;
    }
}
const toyota = new Car('toyota', 100000);
const totalPrice = toyota.totalPrice(25);
