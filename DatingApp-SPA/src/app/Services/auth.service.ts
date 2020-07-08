import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseURL: string = 'http://localhost:5000/api/auth/';
  jwtHelper = new JwtHelperService();
  decodedToken : any;

    constructor(private http: HttpClient) { }
  login(model: any)
  {
    return this.http.post(this.baseURL+'login',model).pipe(
      map((response: any) => 
      {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
        }
        this.decodedToken = this.jwtHelper.decodeToken(user.token)
        return user;
      })
    );
  }

register(model:any){
  return this.http.post(this.baseURL+'register',model);
}
loggedIn(){
  const token = localStorage.getItem('token');

  let isExpired : boolean  = false;
  try{
   isExpired  = this.jwtHelper.isTokenExpired(token);
}catch{
  isExpired= true;
}
  return !isExpired;
}

}
