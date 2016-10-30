import { Injectable } from "@angular/core";
import { Car } from "./cars";
import { CARS } from "./cardata";

@Injectable()

export class CarService {
	private carCollection: Car[];

	constructor() {
		// this.carCollection = [
		// 	{wheels: 2, engine: 2},
		// 	{wheels: 3, engine: 2},
		// 	{wheels: 4, engine: 2},
		// 	{wheels: 1, engine: 1},
		// 	{wheels: 4, engine: 6},
		// 	{wheels: 4, engine: 8}
		// ];
		//
		this.carCollection = CARS;
	};


	addCar(car) {
		this.carCollection.push(car);
	}

	getRandom(): Car {
		let car: Car = this.carCollection[Math.floor(Math.random() * this.carCollection.length)];
		return car;
	}
}
