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
