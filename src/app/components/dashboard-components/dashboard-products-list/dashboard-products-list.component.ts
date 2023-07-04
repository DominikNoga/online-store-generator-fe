import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import Product from 'src/app/interfaces/product.interface';
import { ApiService } from 'src/app/services/apiService/api.service';

@Component({
  selector: 'app-dashboard-products-list',
  templateUrl: './dashboard-products-list.component.html',
  styleUrls: ['./dashboard-products-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardProductsListComponent implements OnInit {
  products: Product[] = [];
  private productsEndpoint: string = 'products';
  constructor(private productsApiService: ApiService<Product>) { }

  ngOnInit(): void {
    this.productsApiService.get(this.productsEndpoint).subscribe(products => this.products = products);
  }

  addProduct(product: Product): void {
    this.productsApiService.add(this.productsEndpoint, product).subscribe(product =>{
      this.products = [...this.products, product]
    })
  }
}
