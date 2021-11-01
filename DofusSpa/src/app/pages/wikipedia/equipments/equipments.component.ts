import { Component, OnInit } from '@angular/core';
import { EquipmentService } from 'src/app/_services/equipment.service';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.sass']
})
export class EquipmentsComponent implements OnInit {

  equipments : any[] = [];

  page : number = 1;
  itemsPerPage : number = 10;
  totalItems : number ; 
  totalPages : number;
  numbers : number[] = [];

  constructor(
    private _equipmentService : EquipmentService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  // Getting Equipments
  getAll(){
    this._equipmentService.getAll(this.page,this.itemsPerPage).subscribe((data) => {
      this.equipments = data.result;
      this.totalItems = data.pagination.totalItems;
      this.totalPages = data.pagination.totalPages;
    });
  }

  // Changing Page
  changingPage(page : number){
    this._equipmentService.getAll(page,this.itemsPerPage).subscribe((data) => {
      this.equipments = data.result;
    });
  }

  setPage($event){
    this.page = ($event.pageIndex + 1);
    console.log(this.page);
    this.changingPage(this.page);
  }

}
