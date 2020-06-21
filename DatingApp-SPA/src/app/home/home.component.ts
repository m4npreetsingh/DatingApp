import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
registerMode : boolean = false;
values: any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  toggleRegisterMode(){
    this.registerMode = true;
    
  }

  

  cancelRegisterMode(flag : boolean){
    this.registerMode = flag;
  }

}
