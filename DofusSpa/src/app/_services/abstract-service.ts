import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export abstract class AbstractService<T> {
    
    constructor(protected _http: HttpClient, protected actionUrl:string){
    }

    // Http Options (defining some headers)
    // CONTENT-TYPE The MIME media type for JSON text is application/json. 
    // Defines the type of data we're sending to the server 
    httpOptions = {
        headers : new HttpHeaders({'Content-Type':'application/json; charset=utf-8'})
      };
  
    getAll():Observable<T[]> {
      return this._http.get<T[]>(this.actionUrl,this.httpOptions);
    }

    // Get Item by id
    getById(id:number):Observable<T> {
      return this._http.get<T>(this.actionUrl+id,this.httpOptions);
    }

    // Delete Item by id
    deleteById(id : number) : Observable<T>{
        return this._http.delete<T>(this.actionUrl+id,this.httpOptions);
    }

    // Create item
    create(model : any) : Observable<T>{
        return this._http.post<T>(this.actionUrl,model,this.httpOptions)
    }

  } 