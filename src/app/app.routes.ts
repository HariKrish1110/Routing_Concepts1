import { Component } from '@angular/core';
import{Routes}from '@angular/router';
import { from } from 'rxjs';
import {ContactComponent} from './contact/contact.component';
import {LoginComponent}from './login/login.component';
import{UserComponent}from './user/user.component';

export const Approute:Routes=[
  
  {path:'login',component: LoginComponent},
  {path:'user',component:UserComponent},
  {path:'contact',component:ContactComponent}
  
];
export const routingcomponents=[LoginComponent,UserComponent,ContactComponent]

