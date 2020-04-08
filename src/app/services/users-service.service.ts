import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
  baseUrl = 'http://localhost:3000/app/user'
  constructor(private http: HttpClient) {}

  getAllUser() {
    return this.http.get(this.baseUrl+'/all')
  }

  registerUser(body) {
    return this.http.post(this.baseUrl+'/register',body,{observe: 'response'});
  }

  loginUser(body) {
    return this.http.post(this.baseUrl+'/login',body,{observe: 'response'});
  }

  logOutUser() {
    localStorage.removeItem('token');
  }

  isUserLoggedIn() {
    if(localStorage.getItem('token')) {
      return true;
    }
    return false;
  }

}
