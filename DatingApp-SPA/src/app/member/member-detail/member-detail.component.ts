import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/User.service';
import { AlertifyjsService } from 'src/app/Services/alertifyjs.service';
import { User } from 'src/app/_models/User';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryImage, NgxGalleryOptions, NgxGalleryAnimation } from '@kolkov/ngx-gallery';


@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
user: User;
Photos:boolean =false;
About:boolean = true;
Interests:boolean = false;
Messages:boolean = false;
galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private userService: UserService, private alertify: AlertifyjsService, private route: ActivatedRoute) { }

  ngOnInit() {
    //this.loadUser();
    this.route.data.subscribe(data => {
      this.user = data['user']
    })

    this.galleryOptions=[
      {
        width:'500px',
        height:'500px',
        imagePercent:100,
        thumbnailsColumns:4,
        imageAnimation:NgxGalleryAnimation.Slide,
        preview:true
      }
    ]

    this.galleryImages = this.getImages();
  }

  loadUser(){
    this.userService.getUser(this.route.snapshot.params['id']).subscribe((user:User)=>{
      this.user = user;
      console.log(user);
      
    },err=>{
      this.alertify.error(err);
    })
  }

  // tslint:disable-next-line: one-line
  getImages(){
    // tslint:disable-next-line: whitespace
    const imageUrls=[];
    for (const photo of this.user.photos) {
      imageUrls.push({
        small:photo.url,
        medium:photo.url,
        large:photo.url
      })
    }
    return imageUrls;
  }



  tabActivation(id){
    console.log("hi");
    console.log(id);
    
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab");
    console.log(tabcontent.length);
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active-tab", "");
    }
    document.getElementById(id).className += "tab col-2 active-tab";
    this.Photos=false;this.About=false;this.Interests=false;this.Messages=false;
    switch(id){
      case "photos":
        this.Photos =true;
        break;
      case "about":
      this.About =true;
      break;
      case "interests":
      this.Interests =true;
      break;
      case "messages":
      this.Messages =true;
      break;
      
        
    }

  }



}
