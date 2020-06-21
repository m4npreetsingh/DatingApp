import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
model:any = {};

  constructor(private authService: AuthService ) { }

  ngOnInit() {}
  

register(){
this.authService.register(this.model).subscribe(response=>{
  console.log("success");
  
},err=>{
  console.log(err.error);
  
  
})
}

cancel(){
 const registerMode = false;
  this.cancelRegister.emit(registerMode);
}
  

}
