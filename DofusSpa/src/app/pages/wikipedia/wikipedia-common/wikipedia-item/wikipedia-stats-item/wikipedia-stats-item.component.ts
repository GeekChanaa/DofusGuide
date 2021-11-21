import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wikipedia-stats-item',
  templateUrl: './wikipedia-stats-item.component.html',
  styleUrls: ['./wikipedia-stats-item.component.sass']
})
export class WikipediaStatsItemComponent implements OnInit {

  // Input parameters
  @Input() statistics : any = {};

  constructor() { }

  ngOnInit() {
  }

}
