import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
dal:number;

  constructor(private router:Router) { }

  ngOnInit() {
  }
  order(){
     this.router.navigate(['orderdetails']);
  }

}