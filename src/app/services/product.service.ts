import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Laptop Dell', price: 1500 },
    { id: 2, name: 'Chuột Logitech', price: 40 },
    { id: 3, name: 'Bàn phím cơ Keychron', price: 100 }
  ];

  getProducts(): Product[] {
    return this.products;
  }
}
