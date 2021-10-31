import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ForumReply } from '../_models/forum-reply';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class ForumReplyService extends AbstractService<ForumReply> {

  constructor(protected _http: HttpClient) {
    super(_http, environment.apiUrl+"/api/ForumReplys/");
  }
}
