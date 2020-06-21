import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {  }

    login(){
      this.authService.login(this.model).subscribe((response)=>{
        console.log(response, 'suxxess');
      }, err => {
        console.log(err, 'error');
      });
      console.log(this.model);
    }


    loggedIn(){
      const token = localStorage.getItem('token');
      return !!token;
    }

    logOut(){
      localStorage.removeItem('token');
      console.log('logged out');
    }
}
