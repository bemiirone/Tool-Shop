import { computed, effect, Injectable, signal } from '@angular/core';
import { CartItem, Product } from './models';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItemsSignal = signal<CartItem[]>([]);

  constructor() {
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      this.cartItemsSignal.set(JSON.parse(savedCartItems));
    }
    effect(() => {
      localStorage.setItem('cartItems', JSON.stringify(this.cartItemsSignal()));
    });
  }

  get cartItems() {
    return this.cartItemsSignal;
  }

  get totalPrice() {
    return computed(() =>
      this.cartItemsSignal().reduce((sum, item) => sum + item.product.price * item.quantity, 0)
    );
  }

  get itemSubtotals() {
    return computed(() =>
      this.cartItemsSignal().map(item => ({
        productId: item.product.id,
        subtotal: item.product.price * item.quantity
      }))
    );
  }

  addToCart(product: Product, quantity: number): void {
    const cartItems = this.cartItemsSignal();
    const existingItem = cartItems.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cartItems.push({ product, quantity });
    }
    this.cartItemsSignal.set([...cartItems]);
  }

  removeFromCart(productId: number): void {
    const cartItems = this.cartItemsSignal();
    const updatedItems = cartItems.filter(item => item.product.id !== productId);
    this.cartItemsSignal.set([...updatedItems]);
  }

  updateQuantity(productId: number, quantity: number): void {
    const cartItems = this.cartItemsSignal();
    const existingItem = cartItems.find(item => item.product.id === productId);
    if (existingItem) {
      existingItem.quantity = quantity;
    }
    this.cartItemsSignal.set([...cartItems]);
  }
}
