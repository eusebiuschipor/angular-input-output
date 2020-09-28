import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerComponent } from './customer.component';



@NgModule({
  declarations: [
    CustomerComponent,
    CustomerDetailsComponent
  ],
  exports: [CustomerComponent],
  imports: [
    CommonModule
  ]
})
export class CustomerModule { }
