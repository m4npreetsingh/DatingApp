import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/User.service';
import { AlertifyjsService } from 'src/app/Services/alertifyjs.service';
import { User } from 'src/app/_models/User';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
user: User;
  constructor(private userService: UserService, private alertify: AlertifyjsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadUser();
  }

  loadUser(){
    this.userService.getUser(this.route.snapshot.params['id']).subscribe((user:User)=>{
      this.user = user;
      console.log(user);
      
    },err=>{
      this.alertify.error(err);
    })
  }



}
