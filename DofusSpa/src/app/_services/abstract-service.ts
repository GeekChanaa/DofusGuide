import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { PaginatedResult } from '../_models/pagination';


export abstract class AbstractService<T> {

  constructor(protected _http: HttpClient, protected actionUrl: string, protected _snackBar : MatSnackBar) {
  }

  // Http Options (defining some headers)
  // CONTENT-TYPE The MIME media type for JSON text is application/json. 
  // Defines the type of data we're sending to the server 
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
  };

  getAll(page?, itemsPerPage?, itemParams?): Observable<PaginatedResult<T[]>> {
    const paginatedResult: PaginatedResult<T[]> = new PaginatedResult<T[]>();

    let params = new HttpParams();
    if (page != null && itemsPerPage != null) {
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
    }

    // Other sorting and filtering params
    if (itemParams != null) {
      for (const p in itemParams) {
        console.log(p);
        console.log(itemParams[p]);
        if (itemParams[p] != null)
        if(p == "filterBy"){
          for(var i =0 ;i < itemParams.filterBy.length ;i++)
          params = params.append(p,itemParams.filterBy[i]);
        }
        else if(p == "filterValue"){
          for(var i =0 ;i < itemParams.filterValue.length ;i++)
          params = params.append(p,itemParams.filterValue[i]);
        }
        else{
          params = params.append(p, itemParams[p]);
        }
        console.log(params);
        
      }
    }


    return this._http.get<T[]>(this.actionUrl, { observe: 'response', params })
      .pipe(
        map(response => {
          paginatedResult.result = response.body;
          if (response.headers.get('Pagination') != null) {
            paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'))
          }
          return paginatedResult;
        })
      )
  }

  // Get Item by id
  getById(id: number): Observable<T> {
    return this._http.get<T>(this.actionUrl + id, this.httpOptions);
  }

  // Delete Item by id
  deleteById(id: number): Observable<T> {
    return this._http.delete<T>(this.actionUrl + id, this.httpOptions).pipe(map(response => {
      this._snackBar.open("Item Deleted Succesfully","dismiss",{duration:2000});
      return response;
    }), catchError(err => {
      this._snackBar.open("Something Went Wrong with deletion of element","dismiss",{duration:2000});
      return throwError("Something Went Wrong");
    }));
  }

  // Create item
  create(model: any): Observable<T> {
    return this._http.post<T>(this.actionUrl, model, this.httpOptions).pipe(map(response => {
      model = response;
      this._snackBar.open("Item Created Succesfully","dismiss",{duration:2000});
      return response;
    }),catchError(err => {
      this._snackBar.open("Something Went Wrong with Creation of element","dismiss",{duration:2000});
      return throwError("Something Went Wrong");
    }));
  }

  // Update Item
  edit(id:number , model:any): Observable<T>{
    return this._http.put<T>(this.actionUrl+id, model, this.httpOptions).pipe(map(response => {
      model = response;
      this._snackBar.open("Item Updated Succesfully","dismiss",{duration:2000});
      return response;
    }), catchError(err => {
      this._snackBar.open("Something Went Wrong with modification of element","dismiss",{duration:2000});
      return throwError("Something Went Wrong");
    }));
  }

}