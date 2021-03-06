import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import{Approute,routingcomponents}from './app.routes';
import {RouterModule}from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { OrderdetailsComponent } from './login/orderdetails/orderdetails.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(Approute) ],
  declarations: [ AppComponent, HelloComponent,routingcomponents, ContactComponent, OrderdetailsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
