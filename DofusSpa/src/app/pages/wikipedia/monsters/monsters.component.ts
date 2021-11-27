import { Component, OnInit } from '@angular/core';
import { Monster } from 'src/app/_models/monster';
import { MonsterService } from 'src/app/_services/monster.service';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.sass']
})
export class MonstersComponent implements OnInit {

  // List of monsters
  monsters : any[] = [];

  page : number = 1;
  itemsPerPage : number = 10;
  totalItems : number ; 
  totalPages : number;
  numbers : number[] = [];

  // filtering parameters
  itemParams : any = {};

  maxLevel :number = 200;
  minLevel : number = 1;

  filterStatistics : string[] = [];
  filter : string[] = [];


  primaryBonusFilters : string[] = [];
  secondaryBonusFilters : string[] = [];
  otherFilters : string[] = [];
  typeFilters : string[] = [];

  wikiType : Monster = {
    id: 1,
    ankamaID: 0,
    name: '',
    level: 0,
    type: '',
    imgUrl: '',
    url: '',
    description: '',
    drops : [],
    resistances : [],
    areas : [],
    statistics : [],
  } ;



  constructor(
    private _monsterService : MonsterService
  ) { }

  ngOnInit(): void {
    this.getAll();
    this.secondaryBonusFilters = [
    ];
    this.primaryBonusFilters = [
      "% Critique",
      "Agilité",
      "Force",
      "Chance",
      "Intelligence",
      "Vitalité",
      "Invocation",
      "PA",
      "PM",
      "Portée"
    ];
    this.typeFilters = [
      "Amulette",
      "Anneau",
      "Bottes",
      "Ceinture",
      "Bouclier",
      "Cape",
      "Chapeau",
      "Dofus",
      "Objet Vivant",
      "Sac à dos",
      "Trophée"
    ];
    this.itemParams.filterBy = [];
    this.itemParams.filterValue = [];
  }

  // Getting Monsters
  getAll(){
    this._monsterService.getAll(this.page,this.itemsPerPage).subscribe((data) => {
      this.monsters = data.result;
      this.totalItems = data.pagination.totalItems;
      this.totalPages = data.pagination.totalPages;
    });
  }

  // Changing Page
  changingPage(page : number){
    this._monsterService.getAll(page,this.itemsPerPage,this.itemParams).subscribe((data) => {
      this.monsters = data.result;
    });
  }

  setPage($event){
    this.page = ($event.pageIndex + 1);
    console.log(this.page);
    this.changingPage(this.page);
  }

  sortData(e){
    this.itemParams.orderBy = e;
    this._monsterService.getAll(this.page,this.itemsPerPage,this.itemParams).subscribe((data)=> {
      this.monsters = data.result;
    })
  }

  filterData(name,value){
    this.itemParams.filterBy.push(name);
    this.itemParams.filterValue.push(value);
    this._monsterService.getAll(this.page,this.itemsPerPage,this.itemParams).subscribe((data)=> {
      this.monsters = data.result;
    })
  }

  filterByBonus(filter : string){
    if(this.itemParams.filterValue.includes(filter)){
      let x = this.itemParams.filterValue.indexOf(filter);
      this.itemParams.filterBy.splice(x,1);
      this.itemParams.filterValue.splice(x,1);
    }
    else
    {
      this.itemParams.filterValue.unshift(filter);
      this.itemParams.filterBy.unshift("Statistics.Name");
    }
  }

  // Reloading Data
  reloadData(){
    if(this.itemParams.filterBy.includes("minLevel")){
      var i = this.itemParams.filterBy.indexOf("minLevel");
      this.itemParams.filterBy.splice(i,1);
      this.itemParams.filterValue.splice(i,1);
    }
    if(this.itemParams.filterBy.includes("maxLevel")){
      var i = this.itemParams.filterBy.indexOf("maxLevel");
      this.itemParams.filterBy.splice(i,1);
      this.itemParams.filterValue.splice(i,1);
    }
    this.itemParams.filterBy.unshift("minLevel");
    this.itemParams.filterValue.unshift(this.minLevel);
    this.itemParams.filterBy.unshift("maxLevel");
    this.itemParams.filterValue.unshift(this.maxLevel);
    this._monsterService.getAll(this.page,this.itemsPerPage,this.itemParams).subscribe((data)=> {
      this.monsters = data.result;
    })
  }

  // filtering by type
  filterByType($event){
    if(this.itemParams.filterValue.includes($event))
    {
      var i = this.itemParams.filterBy.indexOf($event);
      this.itemParams.filterBy.splice(i,1);
      this.itemParams.filterValue.splice(i,1);
    }
    else{
      this.itemParams.filterBy.push("Type");
      this.itemParams.filterValue.push($event);
    }
  }

}
