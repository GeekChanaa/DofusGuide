import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

  // Input Parameters
  @Input() dataSource : any = {};
  @Input() displayedColumns : any[] = [];
  @Input() showColumns : any[] = [];
  @Input() privilegeEntity : string;

  // Ouput events
  @Output() deleteAction = new EventEmitter<number>();
  @Output() displayAction = new EventEmitter<number>();
  @Output() updateAction = new EventEmitter<number>();
  
  constructor(
    public _authService : AuthService
  ) { }

  ngOnInit() {
    console.log(this.showColumns);
  }

  delete(id : number){
    this.deleteAction.emit(id);
  }

  show(id : number){
    this.displayAction.emit(id);
  }

  edit(id : number){
    this.updateAction.emit(id);
  }



}
