import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { AlertifyjsService } from '../Services/alertifyjs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

model: any = {};

  constructor(public authService: AuthService,private alertifyjs: AlertifyjsService, private router: Router) { }

  ngOnInit() {  }

    login(){
      this.authService.login(this.model).subscribe((response)=>{
        this.alertifyjs.success("Successfully LoggedIn")
      }, err => {
        this.alertifyjs.error(err);
      },()=>{
        this.router.navigate(['members'])
      });
    }


    loggedIn(){
      return this.authService.loggedIn();
    }

    // logOut(){
    //   this.alertifyjs.confirm('Are You Sure',this.removeToken);
    // }
    logOut(){
      localStorage.removeItem('token');
      this.alertifyjs.message('logged out')
      this.router.navigate(['']);

    }
}
