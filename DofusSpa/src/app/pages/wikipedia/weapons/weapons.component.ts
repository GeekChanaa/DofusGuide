import { Component, OnInit } from '@angular/core';
import { Weapon } from 'src/app/_models/weapon';
import { WeaponService } from 'src/app/_services/weapon.service';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.sass']
})
export class WeaponsComponent implements OnInit {

  // List of weapons
  weapons : any[] = [];

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

  wikiType : Weapon = {
    id: 1,
    ankamaID: 0,
    name: '',
    level: 0,
    type: '',
    imgUrl: '',
    url: '',
    description: ''
  } ;



  constructor(
    private _weaponService : WeaponService
  ) { }

  ngOnInit(): void {
    this.getAll();
    this.secondaryBonusFilters = [
      "% Critique sur le sort",
      "% Dommages aux sorts",
      "% Dommages d'armes",
      "% Dommages distance",
      "% Dommages mêlée",
      "% Résistance Air",
      "% Résistance Eau",
      "% Résistance Feu",
      "% Résistance Neutre",
      "% Résistance Terre",
      "% Résistance distance ",
      "% Résistance mêlée",
      "Ajouter un sort temporaire",
      "Attitude",
      "Augmente le nombre de lancer maximal par cible du sort",
      "Augmente le nombre de lancer maximal par tour du sort",
      "Augmente la porée maximale du sort de ",
      "Augmente les dégâtts de base du sort de",
      "Change les paroles",
      "Craft coopératif impossible",
      "Dommages sur le sort",
      "Dommages",
      "Dommages air",
      "Dommages critiques",
      "Dommages eau",
      "Dommages feu",
      "Dommages neutre",
      "Dommages pièges",
      "Dommages poussée",
      "Dommages terre",
      "Désactive la ligne de vue du sort",
      "Désactive le lancer en ligne du sort",
      "Esquive PA",
      "Esquive PM",
      "Fuite",
      "Initiative",
      "Pod",
      "Prospection",
      "Puissance",
      "Puissance (piéges",
      "Rend la portée du sort modifiable",
      "Renvoie dommage",
      "Retrait PA",
      "Retrait PM",
      "Réduit de le cout en PA du sort",
      "Réduitt de le délai de relance du sort",
      "Résistance air",
      "Résistance critiques",
      "Résistance eau",
      "Résistance feu",
      "Résistance neutre",
      "Résistance poussée",
      "Résistance terre",
      "Sagesse",
      "Soin",
      "Tacle",
      "Titre",
      "Vitalité",
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

  // Getting Equipments
  getAll(){
    this._weaponService.getAll(this.page,this.itemsPerPage).subscribe((data) => {
      this.weapons = data.result;
      this.totalItems = data.pagination.totalItems;
      this.totalPages = data.pagination.totalPages;
    });
  }

  // Changing Page
  changingPage(page : number){
    this._weaponService.getAll(page,this.itemsPerPage,this.itemParams).subscribe((data) => {
      this.weapons = data.result;
    });
  }

  setPage($event){
    this.page = ($event.pageIndex + 1);
    console.log(this.page);
    this.changingPage(this.page);
  }

  sortData(e){
    this.itemParams.orderBy = e;
    this._weaponService.getAll(this.page,this.itemsPerPage,this.itemParams).subscribe((data)=> {
      this.weapons = data.result;
    })
  }

  filterData(name,value){
    this.itemParams.filterBy.push(name);
    this.itemParams.filterValue.push(value);
    this._weaponService.getAll(this.page,this.itemsPerPage,this.itemParams).subscribe((data)=> {
      this.weapons = data.result;
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
    this._weaponService.getAll(this.page,this.itemsPerPage,this.itemParams).subscribe((data)=> {
      this.weapons = data.result;
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
