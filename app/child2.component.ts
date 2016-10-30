import { Component } from "@angular/core";
import { Car } from "./cars";
import { CarService } from "./car.service";


@Component ({
	selector: "child2",
	template:`
		<div class="child">
			<h3>Child 2</h3>
			<div>
				<input #wheels1 (keyup)="wheelKey(wheels1.value)" type="text" placeholder="wheels"/>
				<input #engine1 (keyup)="engineKey(engine1.value)" type="text" placeholder="engine"/>
				<button (click)=newCar1()>New Car</button>
			</div>
			<p>Car: {{displayWheels}} wheels and {{displayEngine}} cylinders</p>
			<button (click)="getAnotherCar1()">Different Car</button>
		</div>
	`,
	providers: [CarService],
	styles: [`
		.child {
			background-color: #ddd;
			border: 2px solid black;
			margin: 20px;
			padding: 5px;
		}
	`]
})

export class Child2Component {
	displayedCar: Car = {wheels: 2, engine: 8};
	displayWheels = this.displayedCar.wheels;
	displayEngine = this.displayedCar.engine;
	mywheels: number = 0;
	myengine: number = 0;

	constructor(private carService1: CarService) {};

	wheelKey(value: number): void {
		this.mywheels = value;
	}

	engineKey(value: number): void {
		this.myengine = value;
	}

	newCar1() {
		let car = new Car(this.mywheels, this.myengine);
		console.log(car);
		this.carService1.addCar(car);
	}


	getAnotherCar1() {
		this.displayedCar = this.carService1.getRandom();
		this.displayWheels = this.displayedCar.wheels;
		this.displayEngine = this.displayedCar.engine;
	}
}
