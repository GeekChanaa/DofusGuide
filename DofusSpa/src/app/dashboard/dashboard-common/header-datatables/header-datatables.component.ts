import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-header-datatables',
  templateUrl: './header-datatables.component.html',
  styleUrls: ['./header-datatables.component.css']
})
export class HeaderDatatablesComponent implements OnInit {

  // Input parameters
  @Input() showColumns : any = {};
  @Input() searchBy : string;
  @Input() entity : string;
  @Input() entities : string;
  @Output() createDialog  = new EventEmitter<void>();
  @Output() reloadData = new EventEmitter<void>();

  // Filtering Parameters
  @Input() globalParams : any = {};
  // Searching filter
  searchValue : string;

  columns : string[]  = [];

  constructor(
    public _authService: AuthService
  ) { }

  ngOnInit() {
    this.columns = Object.keys(this.showColumns);
  }

  search(name : string){
    console.log(this.globalParams);
    this.globalParams.searchBy = name;
    this.reloadData.emit();
  }

  // Showing or hiding columns
  showCols(col : string){
    this.showColumns[col] = this.showColumns[col] ? false : true;
  }

  // Opening create dialog
  openCreateDialog(){
    this.createDialog.emit();
  }

}
