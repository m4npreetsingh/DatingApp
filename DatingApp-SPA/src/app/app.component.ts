import { Component, OnInit } from '@angular/core';
import { AuthService } from './Services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  jetHelper = new JwtHelperService()
  constructor(private authService:AuthService){}

  ngOnInit(){
    const token = localStorage.getItem('token');
    if (token) {
      try{
      this.authService.decodedToken = this.jetHelper.decodeToken(token)
    
    }catch{
      
    }
  }
  }
  
}
