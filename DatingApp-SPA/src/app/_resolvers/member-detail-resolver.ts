import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { User } from '../_models/User';
import { UserService } from '../Services/User.service';
import { AlertifyjsService } from '../Services/alertifyjs.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()

export class MemberDetailResolver implements Resolve<User>{

    constructor(private userService:UserService, private router:Router, private alertify:AlertifyjsService)
    {}

    resolve(route: ActivatedRouteSnapshot): Observable<User> {
        return this.userService.getUser(route.params['id']).pipe(
           catchError(error => {
            this.alertify.error(error +' Problem retreiving data');
            this.router.navigate(['/members']);
            return of(null);
           })
        );
    }

}