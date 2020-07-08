import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/User.service';
import { AlertifyjsService } from '../../Services/alertifyjs.service';
import { User } from '../../_models/User';

@Component({
  selector: 'app-member-lists',
  templateUrl: './member-lists.component.html',
  styleUrls: ['./member-lists.component.css']
})

export class MemberListsComponent implements OnInit {

  constructor(private userService: UserService, private alertify:AlertifyjsService) { }
  users: User[];
  ngOnInit() {
    this.loadUsers();
  }

  loadUsers(){
    this.userService.getUsers().subscribe((users: User[])=>{
      this.users = users;
      
    },err=>{
      this.alertify.error(err);
    })
  }

}
