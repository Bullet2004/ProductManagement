import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  private storageKey = 'products';
  private products: Product[] = [];

  constructor() {
    this.loadFromStorage();
  }

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Omit<Product, 'id'>): void {
    const newProduct: Product = {
      id: this.generateId(),
      ...product
    };
    this.products.push(newProduct);
    this.saveToStorage();
  }

  updateProduct(id: number, updatedProduct: Partial<Product>): void {
    const index = this.products.findIndex(p => p.id === id);
    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...updatedProduct };
      this.saveToStorage();
    }
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter(p => p.id !== id);
    this.saveToStorage();
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  private generateId(): number {
    const ids = this.products.map(p => Number(p.id)).filter(id => !isNaN(id));
    return ids.length > 0 ? Math.max(...ids) + 1 : 1;
  }


  private saveToStorage(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.products));
  }

  private loadFromStorage(): void {
    const data = localStorage.getItem(this.storageKey);
    if (data) {
      this.products = JSON.parse(data);
    } else {
      this.products = [
        { id: 1, name: 'Laptop Dell', price: 1500 },
        { id: 2, name: 'Chuột Logitech', price: 40 },
        { id: 3, name: 'Bàn phím cơ Keychron', price: 100 }
      ];
      this.saveToStorage();
    }
  }
}
