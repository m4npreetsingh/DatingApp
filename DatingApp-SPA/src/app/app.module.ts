import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


import { ErrorInterceptor, ErrorInterceptorProvider } from './Services/error.interceptor';
import { appRoutes} from './routes'


import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListsComponent } from './lists/lists.component';
import { MemberListsComponent } from './member/member-lists/member-lists.component';
import { MessagesComponent } from './messages/messages.component';
import { MemberCardComponent } from './member/member-card/member-card.component';
import { MemberDetailComponent } from './member/member-detail/member-detail.component';

import { AuthGuard } from './_guards/auth.guard';
import { UserService } from './Services/User.service';
import { AuthService } from './Services/auth.service';
import { MemberDetailResolver } from './_resolvers/member-detail-resolver';
import { AlertifyjsService } from './Services/alertifyjs.service';
import { MemberListResolver } from './_resolvers/member-list-resolver';
import { JwtModule } from '@auth0/angular-jwt';

export function tokenGetter(){
   return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      ListsComponent,
      MemberListsComponent,
      MessagesComponent,
      MemberCardComponent,
      MemberDetailComponent,
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BrowserAnimationsModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      NgxGalleryModule ,
      JwtModule.forRoot({
         config: {
            tokenGetter,
            blacklistedRoutes: ['localhost:5000/api/auth'],
            whitelistedDomains: ['localhost:5000']
         }
      })
   ],
   providers: [
      ErrorInterceptorProvider,
      AuthGuard,
      UserService,
      AuthService,
      MemberDetailResolver,
      AlertifyjsService,
      MemberListResolver
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
