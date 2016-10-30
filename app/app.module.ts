import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Child1Component } from "./child1.component";
import { Child2Component } from "./child2.component";


@NgModule({
	imports: [ BrowserModule ],
	declarations: [ AppComponent, Child1Component, Child2Component ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
