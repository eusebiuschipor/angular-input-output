import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  @Input() customer: any;
  @Output() customerChanged = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  change() {
    this.customer.name = 'Maria Schipor';
    this.customerChanged.emit(this.customer);
  }

}
