import { Component, OnInit } from '@angular/core';
import Product from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.less']
})
export class AdminDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addProduct(product: Product){

  }
}
