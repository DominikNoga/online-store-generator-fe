import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import Product from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddProductFormComponent {
  product: Product = {
    price: 0,
    name: '',
    description: '',
    quantity: 0,
  };

  @Output() onAddProduct = new EventEmitter();

  handleAddProduct(): void {
    this.onAddProduct.emit(this.product);
  }
}
