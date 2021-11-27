import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Profession } from 'src/app/_models/profession';
import { ProfessionService } from 'src/app/_services/profession.service';

@Component({
  selector: 'app-profession',
  templateUrl: './profession.component.html',
  styleUrls: ['./profession.component.sass']
})
export class ProfessionComponent implements OnInit {

  
  // Id of the profession
  id : number;
  // The profession
  profession : Profession;
  // Constructor
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _professionService : ProfessionService,
    private _dialog : MatDialog
  ) { }

  ngOnInit() {
    this.id = parseInt(this._activatedRoute.snapshot.paramMap.get("id"));
    this.getProfession(this.id);
  }

  // Getting the professions
  getProfession(id : number){
    this._professionService.getById(id).subscribe((data) => {
      this.profession = data;
    })
  }


}
