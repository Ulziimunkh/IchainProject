import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../../../models/user.model';

import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
  selectedUser: User = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`/users`);
    }

    getById(id: number) {
        return this.http.get(`/users/` + id);
    }

    register(user: User) {
        console.log('user Data ===>', user);
        return this.http.post(`/user/register`, user, this.noAuthHeader);
    }
    login(authCredentials) {
      return this.http.post('/user/auth', authCredentials, this.noAuthHeader);
    }
    getUserProfile() {
      return this.http.get('/user/home');
    }

    update(user: User) {
        return this.http.put(`/user/` + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(`/user/` + id);
    }


  //Helper Methods

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }

}
