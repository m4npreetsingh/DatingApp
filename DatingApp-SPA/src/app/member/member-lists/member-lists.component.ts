import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/User.service';
import { AlertifyjsService } from '../../Services/alertifyjs.service';
import { User } from '../../_models/User';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-lists',
  templateUrl: './member-lists.component.html',
  styleUrls: ['./member-lists.component.css']
})

export class MemberListsComponent implements OnInit {

  constructor(private userService: UserService, private alertify:AlertifyjsService, private route:ActivatedRoute) { }
  users: User[];
  ngOnInit() {
    this.route.data.subscribe(data=>{
      this.users = data['users']
    })
   // this.loadUsers();
  }

  loadUsers(){
    this.userService.getUsers().subscribe((users: User[])=>{
      this.users = users;
      
    },err=>{
      this.alertify.error(err);
    })
  }

}
