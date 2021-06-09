import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

userForm=new FormGroup({
  dal:new FormControl(""),
  sugar:new FormControl("")
})
  constructor() { }

  ngOnInit() {
  }
  onClickSubmit(){
    alert(this.userForm.value);
  }

}