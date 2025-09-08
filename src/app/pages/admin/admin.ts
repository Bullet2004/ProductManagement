import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {
    products: any[] = [];
    constructor(
      private productService: ProductService,
      public auth: AuthService,
      private router: Router,
    ){}
    ngOnInit() {
    this.products = this.productService.getProducts();
    }
     logout() {
      this.auth.logout();
      this.router.navigate(['/login']);
    }
}
