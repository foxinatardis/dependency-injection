"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var cars_1 = require("./cars");
var car_service_1 = require("./car.service");
var Child1Component = (function () {
    function Child1Component(carService) {
        this.carService = carService;
        this.displayedCar = { wheels: 2, engine: 8 };
        this.displayWheels = this.displayedCar.wheels;
        this.displayEngine = this.displayedCar.engine;
        this.mywheels = 0;
        this.myengine = 0;
    }
    ;
    Child1Component.prototype.wheelKey = function (value) {
        this.mywheels = value;
    };
    Child1Component.prototype.engineKey = function (value) {
        this.myengine = value;
    };
    Child1Component.prototype.newCar = function () {
        var car = new cars_1.Car(this.mywheels, this.myengine);
        this.carService.addCar(car);
    };
    Child1Component.prototype.getAnotherCar = function () {
        console.log("");
        this.displayedCar = this.carService.getRandom();
        this.displayWheels = this.displayedCar.wheels;
        this.displayEngine = this.displayedCar.engine;
    };
    return Child1Component;
}());
Child1Component = __decorate([
    core_1.Component({
        selector: "child1",
        template: "\n\t\t<div class=\"child\">\n\t\t\t<h3>Child 1</h3>\n\t\t\t<div>\n\t\t\t\t<input #wheels (keyup)=\"wheelKey(wheels.value)\" type=\"text\" placeholder=\"wheels\"/>\n\t\t\t\t<input #engine (keyup)=\"engineKey(engine.value)\" type=\"text\" placeholder=\"engine\"/>\n\t\t\t\t<button (click)=newCar()>New Car</button>\n\t\t\t</div>\n\t\t\t<p>Car: {{displayWheels}} wheels and {{displayEngine}} cylinders</p>\n\t\t\t<button (click)=\"getAnotherCar()\">Different Car</button>\n\t\t</div>\n\t",
        providers: [car_service_1.CarService],
        styles: ["\n\t\t.child {\n\t\t\tbackground-color: #ddd;\n\t\t\tborder: 2px solid black;\n\t\t\tmargin: 20px;\n\t\t\tpadding: 5px;\n\t\t}\n\t"]
    }),
    __metadata("design:paramtypes", [car_service_1.CarService])
], Child1Component);
exports.Child1Component = Child1Component;
//# sourceMappingURL=child1.component.js.map