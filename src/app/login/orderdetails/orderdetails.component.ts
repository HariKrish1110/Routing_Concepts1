import { Component ,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {
@Input() namee:number;
  constructor() { }

  ngOnInit() {
  }

}