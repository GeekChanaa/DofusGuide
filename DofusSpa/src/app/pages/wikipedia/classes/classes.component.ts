import { Component, OnInit } from '@angular/core';
import { ClasseService } from 'src/app/_services/classe.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.sass']
})
export class ClassesComponent implements OnInit {

  classes : any[] = [];

  constructor(
    private _classeService : ClasseService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  // Getting Classes
  getAll(){
    this._classeService.getAll().subscribe((data) => {
      this.classes = data;
      console.log(data);
    })
  }

}
