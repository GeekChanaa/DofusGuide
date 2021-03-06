import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.sass']
})
export class PageHeaderComponent implements OnInit {

  @Input() subtitle : string;
  @Input() title : string;
  @Input() description : string;
  @Input() subtitleLink : string;
  constructor() { }

  ngOnInit() {
  }

}
