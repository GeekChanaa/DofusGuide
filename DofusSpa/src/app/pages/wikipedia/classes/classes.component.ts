import { Component, OnInit } from '@angular/core';
import { ClasseService } from 'src/app/_services/classe.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.sass']
})
export class ClassesComponent implements OnInit {

  classes : any[] = [];

  page : number = 1;
  itemsPerPage : number = 10;
  totalItems : number ; 
  totalPages : number;
  numbers : number[] = [];

  constructor(
    private _classeService : ClasseService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  // Getting Classes
  getAll(){
    this._classeService.getAll(this.page,this.itemsPerPage).subscribe((data) => {
      this.classes = data.result;
      this.totalItems = data.pagination.totalItems;
      this.totalPages = data.pagination.totalPages;
    });
  }

  // Changing Page
  changingPage(page : number){
    this._classeService.getAll(page,this.itemsPerPage).subscribe((data) => {
      this.classes = data.result;
    });

  }

}
