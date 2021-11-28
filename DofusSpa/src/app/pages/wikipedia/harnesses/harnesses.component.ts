import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { HarnessService } from 'src/app/_services/harness.service';

@Component({
  selector: 'app-harnesses',
  templateUrl: './harnesses.component.html',
  styleUrls: ['./harnesses.component.sass']
})
export class HarnessesComponent implements OnInit {

  harnesses : any[] = [];

  page : number = 1;
  itemsPerPage : number = 10;
  totalItems : number ; 
  totalPages : number;
  numbers : number[] = [];

  pageEvent: PageEvent;

  constructor(
    private _harnessService : HarnessService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  // Getting Harnesses
  getAll(){
    this._harnessService.getAll(this.page,this.itemsPerPage).subscribe((data) => {
      this.harnesses = data.result;
      this.totalItems = data.pagination.totalItems;
      this.totalPages = data.pagination.totalPages;
    });
  }

  // Changing Page
  changingPage(page : number){
    this._harnessService.getAll(page,this.itemsPerPage).subscribe((data) => {
      this.harnesses = data.result;
    });

  }

  setPage($event){
    this.page = ($event.pageIndex + 1);
    console.log(this.page);
    this.changingPage(this.page);
  }

}
