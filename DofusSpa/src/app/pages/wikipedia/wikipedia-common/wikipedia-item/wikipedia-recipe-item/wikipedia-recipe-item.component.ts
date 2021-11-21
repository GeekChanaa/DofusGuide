import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wikipedia-recipe-item',
  templateUrl: './wikipedia-recipe-item.component.html',
  styleUrls: ['./wikipedia-recipe-item.component.sass']
})
export class WikipediaRecipeItemComponent implements OnInit {

  // Input Parameters
  @Input() recipes : any = {};

  constructor() { }

  ngOnInit() {
  }

}
