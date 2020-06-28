import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { AlertifyjsService } from '../Services/alertifyjs.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

model: any = {};

  constructor(public authService: AuthService,private alertifyjs:AlertifyjsService) { }

  ngOnInit() {  }

    login(){
      this.authService.login(this.model).subscribe((response)=>{
        this.alertifyjs.success("Successfully LoggedIn")
      }, err => {
        this.alertifyjs.error(err);
      });
    }


    loggedIn(){
      return this.authService.loggedIn();
    }

    logOut(){
      this.alertifyjs.confirm('Are You Sure',this.removeToken);
    }
    removeToken(){
      localStorage.removeItem('token');
    }
}
