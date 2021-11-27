import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Monster } from 'src/app/_models/monster';
import { MonsterService } from 'src/app/_services/monster.service';

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.sass']
})
export class MonsterComponent implements OnInit {

  /// Id of the monster
  id : number;
  // The monster
  monster : Monster;
  // Constructor
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _monsterService : MonsterService
  ) { }

  ngOnInit() {
    this.id = parseInt(this._activatedRoute.snapshot.paramMap.get("id"));
    this.getMonster(this.id);
  }

  // Getting the monsters
  getMonster(id : number){
    this._monsterService.getById(id).subscribe((data) => {
      this.monster = data;
    })
  }

}
