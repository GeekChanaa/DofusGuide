import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ResourceService } from 'src/app/_services/resource.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.sass']
})
export class ResourcesComponent implements OnInit {

  resources : any[] = [];

  page : number = 1;
  itemsPerPage : number = 10;
  totalItems : number ; 
  totalPages : number;
  numbers : number[] = [];

  pageEvent: PageEvent;

  constructor(
    private _resourceService : ResourceService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  // Getting Resources
  getAll(){
    this._resourceService.getAll(this.page,this.itemsPerPage).subscribe((data) => {
      this.resources = data.result;
      this.totalItems = data.pagination.totalItems;
      this.totalPages = data.pagination.totalPages;
    });
  }

  // Changing Page
  changingPage(page : number){
    this._resourceService.getAll(page,this.itemsPerPage).subscribe((data) => {
      this.resources = data.result;
    });

  }

  setPage($event){
    this.page = ($event.pageIndex + 1);
    console.log(this.page);
    this.changingPage(this.page);
  }

}
