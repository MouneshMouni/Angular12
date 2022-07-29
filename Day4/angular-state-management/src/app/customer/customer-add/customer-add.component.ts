import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Customer } from 'src/app/models/customer';
import { addCustomer } from '../store/action/customer.actions';
import { CustomerState } from '../store/reducer/customer.reducer';
 
@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  constructor(private store: Store<CustomerState>,
    private http: HttpClient) {
  }
  addCustomer(customerName: string): void {
    const customer = new Customer();
    customer.name = customerName;
    this.store.dispatch(addCustomer(customer));
  }
  ngOnInit(): void {
    this.http.get<Customer[]>('./assets/customerList.json').subscribe(
      (response:Customer[])=>{
        this.store.dispatch(addCustomer(response[2]));
      }
    );
  }
 
}
