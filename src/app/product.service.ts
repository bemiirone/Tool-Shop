import { Injectable } from '@angular/core';
import { Product } from './models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Hammer', price: 20 },
    { id: 2, name: 'Screwdriver', price: 10 },
    { id: 3, name: 'Wrench', price: 15 },
    { id: 4, name: 'Saw', price: 25 },
    { id: 5, name: 'Drill', price: 50 },
    { id: 6, name: 'Pliers', price: 10 },
    { id: 7, name: 'Chisel', price: 5 },
    { id: 8, name: 'Mallet', price: 20 },
    { id: 9, name: 'Tape Measure', price: 10 },
    { id: 10, name: 'Square', price: 15 },
  ];

  getProducts() {
    return this.products;
  }
  constructor() { }
}
