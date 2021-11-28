import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'DofusSpa';

  jwtHelper = new JwtHelperService();

  constructor(
    private _authService : AuthService,
    private http : HttpClient,
    ) {
  }

  ngOnInit(){
    const token = localStorage.getItem("token");
    this._authService.decodedToken = this.jwtHelper.decodeToken(token);
  }
}
