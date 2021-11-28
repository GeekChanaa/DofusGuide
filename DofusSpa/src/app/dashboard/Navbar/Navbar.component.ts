import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-Navbar',
  templateUrl: './Navbar.component.html',
  styleUrls: ['./Navbar.component.scss']
})
export class NavbarComponent implements OnInit {

constructor(
    private _authService : AuthService
  ) { }


  // On init cycle hook
  ngOnInit() {
  }

  // Logging out from the dashboard
  logout(){
    this._authService.logout();
  }

}
