import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../../services/product.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}
