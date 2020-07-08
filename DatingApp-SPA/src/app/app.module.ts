import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



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
      MemberCardComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BrowserAnimationsModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      ErrorInterceptorProvider
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
