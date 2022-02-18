import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // User Model
  user : any = {};

  constructor(
    private _authService : AuthService
  ) { }

  ngOnInit() {
  }

  // Register function
  register(){
    this.user.rankID = 1;
    this._authService.register(this.user).subscribe(data => {
      console.log("registered success");
    })
  }
}
