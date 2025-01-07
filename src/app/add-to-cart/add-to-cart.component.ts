import { Component, inject } from '@angular/core';
import { CartService } from '../cart.service';
import { FormsModule } from '@angular/forms';
import { Product } from '../models';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-to-cart',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.scss'
})
export class AddToCartComponent {
  products: Product[] = inject(ProductService).getProducts();
  cartService = inject(CartService);
  selectedProduct: Product | null = null;
  quantity: number = 1;
   

  addToCart(): void {
    if (this.selectedProduct !== null && this.quantity > 0) {
      this.cartService.addToCart(this.selectedProduct, this.quantity);
      this.quantity = 1;
    }
  }
}

