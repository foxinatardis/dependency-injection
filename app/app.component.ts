import { Component } from '@angular/core';
import { Child1Component } from "./child1.component";
import { Child2Component } from "./child2.component";



@Component({
	selector: 'my-app',
	template: `
		<h1>Dependency Injection</h1>
		<child1></child1>
		<child2></child2>
	`,

})
export class AppComponent {

}
