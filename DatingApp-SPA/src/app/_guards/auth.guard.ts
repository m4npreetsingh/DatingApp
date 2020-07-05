import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';
import { AlertifyjsService } from '../Services/alertifyjs.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private alertify : AlertifyjsService) {};
  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      return true;  
    }
    this.router.navigate([''])
    this.alertify.error('You must log in')
  }
  
}
