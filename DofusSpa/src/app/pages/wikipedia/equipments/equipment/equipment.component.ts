import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Equipment } from 'src/app/_models/equipment';
import { EquipmentService } from 'src/app/_services/equipment.service';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.sass']
})
export class EquipmentComponent implements OnInit {

  // Id of the equipment
  id : number;
  // The equipment
  equipment : Equipment;
  // Constructor
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _equipmentService : EquipmentService
  ) { }

  ngOnInit() {
    this.id = parseInt(this._activatedRoute.snapshot.paramMap.get("id"));
    this.getEquipment(this.id);
  }

  // Getting the equipments
  getEquipment(id : number){
    this._equipmentService.getById(id).subscribe((data) => {
      this.equipment = data;
    })
  }
}
