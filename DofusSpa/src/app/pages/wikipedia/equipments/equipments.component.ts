import { Component, OnInit } from '@angular/core';
import { Equipment } from 'src/app/_models/equipment';
import { EquipmentService } from 'src/app/_services/equipment.service';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.sass']
})
export class EquipmentsComponent implements OnInit {

  // List of equipments
  equipments : any[] = [];

  page : number = 1;
  itemsPerPage : number = 10;
  totalItems : number ; 
  totalPages : number;
  numbers : number[] = [];

  // filtering parameters
  itemParams : any = {};

  maxLevel :number;
  minLevel : number;


  primaryBonusFilters : string[] = [];
  secondaryBonusFilters : string[] = [];
  otherFilters : string[] = [];
  typeFilters : string[] = [];

  wikiType : Equipment = {
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
    private _equipmentService : EquipmentService
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
      "Critique",
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

  sortData(e){
    this.itemParams.orderBy = e;
    this._equipmentService.getAll(this.page,this.itemsPerPage,this.itemParams).subscribe((data)=> {
      this.equipments = data.result;
    })
  }

  filterData(name,value){
    this.itemParams.filterBy.push(name);
    this.itemParams.filterValue.push(value);
    this._equipmentService.getAll(this.page,this.itemsPerPage,this.itemParams).subscribe((data)=> {
      this.equipments = data.result;
    })
  }

  
}
