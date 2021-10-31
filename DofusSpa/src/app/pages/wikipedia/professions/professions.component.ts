import { Component, OnInit } from '@angular/core';
import { ProfessionService } from 'src/app/_services/profession.service';

@Component({
  selector: 'app-professions',
  templateUrl: './professions.component.html',
  styleUrls: ['./professions.component.sass']
})
export class ProfessionsComponent implements OnInit {

  professions : any[] = [];

  page : number = 1;
  itemsPerPage : number = 10;
  totalItems : number ; 
  totalPages : number;
  numbers : number[] = [];

  constructor(
    private _professionService : ProfessionService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  // Getting Professions
  getAll(){
    this._professionService.getAll(this.page,this.itemsPerPage).subscribe((data) => {
      this.professions = data.result;
      this.totalItems = data.pagination.totalItems;
      this.totalPages = data.pagination.totalPages;
    });
  }

  // Changing Page
  changingPage(page : number){
    this._professionService.getAll(page,this.itemsPerPage).subscribe((data) => {
      this.professions = data.result;
    });

  }

}
