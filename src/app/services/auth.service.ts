import { Injectable } from '@angular/core';

interface User {
  username: string;
  password: string;
  role: 'admin' | 'user';
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private users: User[] = [
    { username: 'admin', password: '123456', role: 'admin' },
    { username: 'user', password: '123456', role: 'user' }
  ];

  private currentUser: User | null = null;

  login(username: string, password: string): boolean {
    const foundUser = this.users.find(
      u => u.username === username && u.password === password
    );
    if (foundUser) {
      this.currentUser = foundUser;
      return true;
    }
    return false;
  }

  logout() {
    this.currentUser = null;
  }

  getIsLoggedIn(): boolean {
    return this.currentUser !== null;
  }

  getUserRole(): 'admin' | 'user' | null {
    return this.currentUser?.role ?? null;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }
}
