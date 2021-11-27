import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wikipedia-item',
  templateUrl: './wikipedia-item.component.html',
  styleUrls: ['./wikipedia-item.component.sass']
})
export class WikipediaItemComponent implements OnInit {

  @Input() item : any = {};

  constructor() { 
  }

  ngOnInit() {
    console.log("======= CHARS ======");
    console.log(this.item.chars);
  }

}
