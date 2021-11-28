import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  showFiller = false;
  panelOpenState = false;

  constructor(
    public _authService: AuthService
  ) {
  }

  ngOnInit() {
    this.loadCSS();
  }

  // Loading Css Files for dashboard
  loadCSS() {
    const cssFiles = [
      "/assets/css/dashboard.css",
      "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600&display=swap",
    ];
    for (let i = 0; i < cssFiles.length; i++) {
      const node = document.createElement('link');
      node.href = cssFiles[i];
      node.rel = "stylesheet";
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

}
