import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AbstractService } from '../_services/abstract-service';
import { AuthService } from '../_services/auth.service';
import { DisplayComponent } from './dashboard-common/display/display.component';

export abstract class BaseDashboardComponent<T> {
  // Progress Bar (state)
  loader: boolean = false;
  // Pagination Attributes
  pageNumber = 1;
  pageSize = 10;
  totalItems = 0;

  dataSource: any;
  dataList: any;
  client: any = {};
  // Constructor
  constructor(
    protected dialog: MatDialog,
    protected _entityService: AbstractService<T>,
    protected _authService: AuthService
  ) {}

  // Parameters to be passed for sorting / filtering ...
  globalParams: any = {};

  // loading Data
  reloadData() {
    this.loader = true;
    this._entityService
      .getAll(this.pageNumber, this.pageSize, this.globalParams)
      .subscribe((data) => {
        this.dataList = data.result;
        this.dataSource = new MatTableDataSource<T>(this.dataList);
        this.totalItems = data.pagination.totalItems;
        this.loader = false;
      });
  }

  // Pagination
  setPage($event) {
    this.pageNumber = $event.pageIndex + 1;
    this.reloadData();
  }

  // Reset Sorting
  resetSorting(orderBy: string) {
    this.globalParams.orderBy = orderBy;
    this.globalParams.reverseOrder =
      this.globalParams.reverseOrder == 'y'
        ? (this.globalParams.reverseOrder = 'n')
        : (this.globalParams.reverseOrder = 'y');
    this.reloadData();
  }

  // Filtering
  setFilters(searchBy: string) {
    this.globalParams.searchBy = searchBy;
    this.reloadData();
  }

  // Show
  show(showid: number) {
    this._entityService.getById(showid).subscribe((data) => {
      if (data) {
        this.dialog.open(DisplayComponent, {
          data: { item: data },
        });
      }
    });
  }

  // Delete
  delete(id: number) {
    this._entityService.deleteById(id).subscribe((data) => {
      // Updating the datasource
      this.reloadData();
    });
  }
}
