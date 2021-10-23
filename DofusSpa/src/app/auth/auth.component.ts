import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  title = 'Dofus';

  constructor() {
    
   }

   ngOnInit(){
    this.loadCSS();
    this.loadScripts();
   }

  
   loadCSS(){
    // css files$
    const cssFiles= [
      "/assets/css/app.css",
    ];
    for(let i = 0; i< cssFiles.length;i++){
      const node = document.createElement('link');
      node.href = cssFiles[i];
      node.rel = "stylesheet";
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

  loadScripts(){
    // files / cdns
    const dynamicScripts = [
      "/assets/js/lib/apexcharts.js",
      "/assets/js/lib/jquery.magnific-popup.min.js",
      "/assets/js/lib/jquery.min.js",
      "/assets/js/lib/jquery.nice-select.min.js",
      "/assets/js/lib/slick.min.js",
      "/assets/js/lib/svg4everybody.min.js",
      "/assets/js/app.js",
      "/assets/js/charts.js",
    ];
    for(let i = 0; i< dynamicScripts.length;i++){
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }


}
