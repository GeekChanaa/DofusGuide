import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ForumCategory } from '../_models/forum-category';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class ForumCategoryService extends AbstractService<ForumCategory> {

  constructor(protected _http: HttpClient) {
    super(_http, environment.apiUrl+"/api/ForumCategories/");
  }
}
