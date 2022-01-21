import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ForumReportReply } from '../_models/forum-report-reply';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class ForumReportReplyService extends AbstractService<ForumReportReply> {

  constructor(protected _http: HttpClient) {
    super(_http, environment.apiUrl+"/api/ForumReportReplies/");
  }
}
