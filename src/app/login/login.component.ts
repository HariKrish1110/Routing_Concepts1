import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
name:string;
pass:string;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  LoginUser(){
    if(this.name=="admin" && this.pass=="pass"){
      this.router.navigate(['user']);
    }
    else{
      alert('your credintals is wrong');
    }
  }

}