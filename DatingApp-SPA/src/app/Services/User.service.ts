import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../_models/User';

const httpOptions = {
headers : new HttpHeaders({
 'Authorization' : 'Bearer '+ localStorage.getItem('token')
})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http: HttpClient) { }

 baseUrl: string = environment.apiUrl;

 getUsers(): Observable<User[]>{
   return this.http.get<User[]>(this.baseUrl + 'users');
 }

 getUser(id: number): Observable<User>{
  return this.http.get<User>(this.baseUrl + 'users/' + id);
}

}
