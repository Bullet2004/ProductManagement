import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
   username = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    if (this.auth.login(this.username, this.password)) {
      const role = this.auth.getUserRole();
      if (role === 'admin') {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/user']);
      }
    } else {
      alert('Sai tài khoản hoặc mật khẩu');
    }
  }
}
