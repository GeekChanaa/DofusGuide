import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { EquipmentService } from 'src/app/_services/equipment.service';

@Component({
  selector: 'app-sell-equipment',
  templateUrl: './sell-equipment.component.html',
  styleUrls: ['./sell-equipment.component.sass']
})
export class SellEquipmentComponent implements OnInit {

  // Product
  product : any = {};

  // Equipment Statistics
  statistics : any[] = [];

  // Equipments
  equipments : any[] = [];

  // Filtering and searching params
  globalParams : any = {};

  constructor(
    private _equipmentService : EquipmentService,
    private _cdr : ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.searchEquipment("");
  }

  // Searching for equipment by name
  searchEquipment(name : string){
    this.globalParams.SearchBy = "Name";
    this.globalParams.SearchValue = name;
    this._equipmentService.getAll(1,15,this.globalParams).subscribe(data => {
      this.equipments = data.result;
      this._cdr.detectChanges();
    })
  }

  // Getting Statistics of item
  getStatistics(id : number){
    this._equipmentService.getById(id).subscribe(data => {
      this.statistics = data.statistics;
      console.log(this.statistics);
      
    });
  }
}
