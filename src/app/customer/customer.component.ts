import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer: any;

  constructor() { }

  ngOnInit(): void {
    // call service/store
    this.customer = {
      name: 'Schipor Eusebiu',
      address: {
        city: 'Bucharest'
      }
    };
  }

  changed(customer: any) {
    this.customer = customer;
  }

}
