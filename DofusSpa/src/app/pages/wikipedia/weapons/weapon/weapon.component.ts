import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Weapon } from 'src/app/_models/weapon';
import { WeaponService } from 'src/app/_services/weapon.service';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.sass']
})
export class WeaponComponent implements OnInit {

  // Vars
  weapon : Weapon;
  id : number;

  // Constructor
  constructor(
    private _activatedRoute : ActivatedRoute,
    private _weaponService : WeaponService
  ) { }

  // On init cycle hook
  ngOnInit() {
    this.id = parseInt(this._activatedRoute.snapshot.paramMap.get("id"));
    this.getWeapon(this.id);
  }
  
  //Getting weapon by id
  getWeapon(id : number){
    this._weaponService.getById(id).subscribe((data) => {
      this.weapon = data;
    })
  }

}
