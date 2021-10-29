import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-link-card',
  templateUrl: './category-link-card.component.html',
  styleUrls: ['./category-link-card.component.sass']
})
export class CategoryLinkCardComponent implements OnInit {


  // Input parameters
  @Input() name : string;  
  @Input() subname : string;
  @Input() count : number;
  @Input() link : string;

  constructor() { }

  ngOnInit() {
  }

}
