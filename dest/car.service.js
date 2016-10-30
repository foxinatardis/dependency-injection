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
var cardata_1 = require("./cardata");
var CarService = (function () {
    function CarService() {
        // this.carCollection = [
        // 	{wheels: 2, engine: 2},
        // 	{wheels: 3, engine: 2},
        // 	{wheels: 4, engine: 2},
        // 	{wheels: 1, engine: 1},
        // 	{wheels: 4, engine: 6},
        // 	{wheels: 4, engine: 8}
        // ];
        //
        this.carCollection = cardata_1.CARS;
    }
    ;
    CarService.prototype.addCar = function (car) {
        this.carCollection.push(car);
    };
    CarService.prototype.getRandom = function () {
        var car = this.carCollection[Math.floor(Math.random() * this.carCollection.length)];
        return car;
    };
    CarService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CarService);
    return CarService;
}());
exports.CarService = CarService;
//# sourceMappingURL=car.service.js.map