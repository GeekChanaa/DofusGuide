import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  // Input parameters
  @Input() entity : any = {};


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) { 
  }

  ngOnInit() {
    this.entity = this.data.item;
  }

  isObj(item : any) : boolean {
    return typeof(item) === 'object'
  }

}
