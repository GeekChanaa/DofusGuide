import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sorting-filter',
  templateUrl: './sorting-filter.component.html',
  styleUrls: ['./sorting-filter.component.sass']
})
export class SortingFilterComponent implements OnInit {

  // Type of the item being sorted
  @Input() type : any = {};

  // Output Events
  @Output() sort = new EventEmitter<string>();

  // List of properties
  properties : string[] = [];
  constructor() { }

  ngOnInit() {
    for(const property in this.type){
      this.properties.push(property);
    }
  }

  sortBy(x){
    this.sort.emit(x);
  }
}
