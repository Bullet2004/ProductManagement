import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Admin } from './pages/admin/admin';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import { User } from './pages/user/user';
export const routes: Routes = [
 { path: 'login', component: Login },

  {
    path: 'admin',
    component: Admin,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' }
  },

  {
    path: 'user',
    component: User,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'user' }
  },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];
