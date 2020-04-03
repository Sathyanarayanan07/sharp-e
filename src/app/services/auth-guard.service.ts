import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private route: Router) { }

  canActivate () {
    let token = localStorage.getItem('token');
    if(token) {
      token = helper.decodeToken(token);
      if((token as any).isAdmin) {
        return true;
      }
    }
    this.route.navigate(['/']);
    return false;
  }
}
