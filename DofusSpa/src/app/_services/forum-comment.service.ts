import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ForumComment } from '../_models/forum-comment';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class ForumCommentService extends AbstractService<ForumComment> {

  constructor(protected _http: HttpClient) {
    super(_http, environment.apiUrl+"/api/ForumComments/");
  }
}
