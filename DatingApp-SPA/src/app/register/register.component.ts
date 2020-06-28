import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../Services/auth.service';
import { AlertifyjsService } from '../Services/alertifyjs.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
model:any = {};

  constructor(private authService: AuthService, private alertifyjs:AlertifyjsService ) { }

  ngOnInit() {}
  

register(){
this.authService.register(this.model).subscribe(response=>{
  this.alertifyjs.success("success");
  
},err=>{
  this.alertifyjs.error(err);
  
  
})
}

cancel(){
 const registerMode = false;
  this.cancelRegister.emit(registerMode);
}
  

}
