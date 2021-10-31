import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PaginatedResult } from '../_models/pagination';


export abstract class AbstractService<T> {

  constructor(protected _http: HttpClient, protected actionUrl: string) {
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
        if (itemParams[p] != null)
          params = params.append(p, itemParams[p]);
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
    return this._http.delete<T>(this.actionUrl + id, this.httpOptions);
  }

  // Create item
  create(model: any): Observable<T> {
    return this._http.post<T>(this.actionUrl, model, this.httpOptions)
  }

}