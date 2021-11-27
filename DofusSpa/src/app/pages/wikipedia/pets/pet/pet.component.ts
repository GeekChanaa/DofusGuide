import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pet } from 'src/app/_models/pet';
import { PetService } from 'src/app/_services/pet.service';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.sass']
})
export class PetComponent implements OnInit {

  // Id of the pet
  id : number;
  // The pet
  pet : Pet;
  // Constructor
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _petService : PetService
  ) { }

  ngOnInit() {
    this.id = parseInt(this._activatedRoute.snapshot.paramMap.get("id"));
    this.getPet(this.id);
  }

  // Getting the pets
  getPet(id : number){
    this._petService.getById(id).subscribe((data) => {
      this.pet = data;
    })
  }
}
