import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wikipedia-effects-item',
  templateUrl: './wikipedia-effects-item.component.html',
  styleUrls: ['./wikipedia-effects-item.component.sass']
})
export class WikipediaEffectsItemComponent implements OnInit {

  // Input Parameters
  @Input() effects : any[] = [];

  constructor() { }

  // on init cycle hook
  ngOnInit() {
    
  }

}
