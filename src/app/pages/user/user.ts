import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../../services/product.service';
import { CurrencyPipe } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
