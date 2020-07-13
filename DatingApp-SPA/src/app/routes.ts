import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemberListsComponent } from './member/member-lists/member-lists.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './member/member-detail/member-detail.component';

export const appRoutes: Routes = [
    {path:'', component : HomeComponent},
    {   
        path:'',
        runGuardsAndResolvers : 'always',
        canActivate:[AuthGuard],
        children:[
            { path: 'lists', component: ListsComponent },
            { path: 'members', component: MemberListsComponent },
            { path: 'messages', component: MessagesComponent },
            { path: 'members/:id', component: MemberDetailComponent }

        ]
    },
   
    { path: '**', redirectTo:'home',pathMatch: 'full' }


]