import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.sass']
})
export class CategoryItemComponent implements OnInit {

  @Input() name : string;
  @Input() link : string;

  constructor() { }

  ngOnInit() {
  }

}
