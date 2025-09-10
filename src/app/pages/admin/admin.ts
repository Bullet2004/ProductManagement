import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ProductService, Product } from '../../services/product.service';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CurrencyPipe, FormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {
  products: Product[] = [];
  showModal = false;
  editMode = false;
  modalProduct: Product = { id: 0, name: '', price: 0 };

  constructor(
    private productService: ProductService,
    public auth: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  openAddModal() {
    this.editMode = false;
    this.modalProduct = { id: Date.now(), name: '', price: 0 };
    this.showModal = true;
  }

  openEditModal(product: Product) {
    this.editMode = true;
    this.modalProduct = { ...product };
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  saveProduct() {
    if (this.editMode) {
      this.productService.updateProduct(this.modalProduct.id, this.modalProduct);
    } else {
      this.productService.addProduct(this.modalProduct);
    }
    this.products = this.productService.getProducts();
    this.closeModal();
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
    this.products = this.productService.getProducts();
  }
}
