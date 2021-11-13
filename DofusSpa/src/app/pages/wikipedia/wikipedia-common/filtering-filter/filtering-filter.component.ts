import { EventEmitter,Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filtering-filter',
  templateUrl: './filtering-filter.component.html',
  styleUrls: ['./filtering-filter.component.sass']
})
export class FilteringFilterComponent implements OnInit {


  // Input properties
  @Input() name : string;
  @Input() filters : string[] = [];
  @Output() filterBonus = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  filterBy(f){
    this.filterBonus.emit(f);
  }

}
