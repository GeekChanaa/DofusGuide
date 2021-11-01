import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  title = 'HygeneSpa';

  constructor() {
    
   }

   ngOnInit(){
    this.loadCSS();
    this.loadScripts();
   }

  
   loadCSS(){
    // css files$
    const cssFiles= [
      '/assets/css/app.css',
      '/assets/css/crypter.min.css',
    ];
    for(let i = 0; i< cssFiles.length;i++){
      const node = document.createElement('link');
      node.href = cssFiles[i];
      node.rel = 'stylesheet';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

  loadScripts(){
    // files / cdns
    const dynamicScripts = [
      '/assets/js/lib/apexcharts.min.js',
      '/assets/js/lib/jquery.magnific-popup.min.js',
      '/assets/js/lib/jquery.min.js',
      '/assets/js/lib/jquery.nice-select.min.js',
      '/assets/js/lib/slick.min.js',
      '/assets/js/lib/svg4everybody.min.js',
      '/assets/js/lib/jquery.countdown.min.js',
      '/assets/js/lib/nouislider.min.js',
      '/assets/js/lib/share-buttons.js',
      '/assets/js/lib/wNumb.js',
      '/assets/js/app.js',
      '/assets/js/crypter.js',
      '/assets/js/demo.js',
      '/assets/js/charts.js',
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
