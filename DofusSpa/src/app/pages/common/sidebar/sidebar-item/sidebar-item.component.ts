import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.sass']
})
export class SidebarItemComponent implements OnInit {

  @Input() active: boolean;
  @Input() name : string;
  @Input() link : string;
  @Input() icon : string;
  
  constructor() { }

  ngOnInit() {
  }

}
