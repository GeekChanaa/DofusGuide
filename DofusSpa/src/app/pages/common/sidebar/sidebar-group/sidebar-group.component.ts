import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-group',
  templateUrl: './sidebar-group.component.html',
  styleUrls: ['./sidebar-group.component.sass']
})
export class SidebarGroupComponent implements OnInit {

  @Input() name : string;

  constructor() { }

  ngOnInit() {
  }

}
