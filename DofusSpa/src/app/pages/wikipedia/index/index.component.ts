import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {

  // Wikipedia Categories
  categories : any[] = [];

  constructor(private _http : HttpClient) { }

  ngOnInit() {
    this.getWikipediaCategories();
  }

  private _wikipediaCategoriesJson = 'assets/json-files/wikipedia-categories.json';

  // Getting data
  getWikipediaCategories(){
    this.getJson().subscribe((datat) => {
      this.categories = datat;
    })
  }

  getJson() : Observable<any[]>{
    return this._http.get<any[]>(this._wikipediaCategoriesJson);
  }

  // List Of Wikipedia Categories : 


}
