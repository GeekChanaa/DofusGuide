import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.apiUrl+"/api/auth/";
  jwtHelper = new JwtHelperService();
  decodedToken : any;
  token : any;

  constructor(
    private http: HttpClient, 
    private _userService: UserService, 
    private router: Router,
    ) 
    { }

  // Login method
  login(model:any){
    return this.http.post(this.baseUrl +'login', model).pipe(
      map((response:any) => {
        const user = response;
        if(user){
          localStorage.setItem('token',user.token);
          this.token = user.token;
          var decode = this.jwtHelper.decodeToken(user.token);
          this.decodedToken = decode;
        }
      })
    )
  }

  // Register method
  register(model:any) : Observable<User>{
    return this.http.post<User>(this.baseUrl + 'register', model);
  }

  // Checking if token is valid or not
  checkToken(token :string) : Observable<any>{
    return this.http.post(this.baseUrl+"checktoken", token);
  }

  // Check if user is logged in
  loggedIn(){
    const token = localStorage.getItem('token');
    if(token) return !this.jwtHelper.isTokenExpired(token);
    else return false;
  }

  logout(){
    localStorage.removeItem("token");
    this.router.navigate(['/']);
  }

  getAuthInformation(){
    var token = localStorage.getItem('token');
    this.decodedToken = this.jwtHelper.decodeToken(token);
  }

  // Changing password
  changePassword(pwd : any){
    return this.http.post(this.baseUrl+"ChangePassword",pwd);
  }

}
