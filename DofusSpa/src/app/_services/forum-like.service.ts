import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ForumLike } from '../_models/forum-like';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class ForumLikeService extends AbstractService<ForumLike> {

  constructor(protected _http: HttpClient) {
    super(_http, environment.apiUrl+"/api/ForumLikes/");
  }
}
