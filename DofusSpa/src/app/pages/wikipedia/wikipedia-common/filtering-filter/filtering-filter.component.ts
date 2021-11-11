import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtering-filter',
  templateUrl: './filtering-filter.component.html',
  styleUrls: ['./filtering-filter.component.sass']
})
export class FilteringFilterComponent implements OnInit {


  // Input properties
  @Input() name : string;
  @Input() filters : string[] = [];

  constructor() { }

  ngOnInit() {
  }

}
