import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wikipedia-list-item',
  templateUrl: './wikipedia-list-item.component.html',
  styleUrls: ['./wikipedia-list-item.component.sass']
})
export class WikipediaListItemComponent implements OnInit {

  // Input parameters
  @Input() img : string;
  @Input() name : string;
  @Input() props : any[];

  constructor() { }

  ngOnInit() {
  }

}
