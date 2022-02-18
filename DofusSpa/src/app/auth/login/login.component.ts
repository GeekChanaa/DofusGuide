import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //User
  user : any = {};

  constructor(
    private _authService : AuthService
  ) { }

  ngOnInit() {
  }

  // Login
  login(){
    this._authService.login(this.user).subscribe(data => {
      console.log("LOGGED IN");
      
    })
  }

}
