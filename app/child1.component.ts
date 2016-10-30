import { Component } from "@angular/core";
import { Car } from "./cars";
import { CarService } from "./car.service";


@Component ({
	selector: "child1",
	template:`
		<div class="child">
			<h3>Child 1</h3>
			<div>
				<input #wheels (keyup)="wheelKey(wheels.value)" type="text" placeholder="wheels"/>
				<input #engine (keyup)="engineKey(engine.value)" type="text" placeholder="engine"/>
				<button (click)=newCar()>New Car</button>
			</div>
			<p>Car: {{displayWheels}} wheels and {{displayEngine}} cylinders</p>
			<button (click)="getAnotherCar()">Different Car</button>
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

export class Child1Component {
	displayedCar: Car = {wheels: 2, engine: 8};
	displayWheels = this.displayedCar.wheels;
	displayEngine = this.displayedCar.engine;
	mywheels: number = 0;
	myengine: number = 0;

	constructor(private carService: CarService) {};

	wheelKey(value: number): void {
		this.mywheels = value;
	}

	engineKey(value: number): void {
		this.myengine = value;
	}

	newCar() {
		let car = new Car(this.mywheels, this.myengine);
		this.carService.addCar(car);
	}


	getAnotherCar() {
		console.log("")
		this.displayedCar = this.carService.getRandom();
		this.displayWheels = this.displayedCar.wheels;
		this.displayEngine = this.displayedCar.engine;
	}
}
