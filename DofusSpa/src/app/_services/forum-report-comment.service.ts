import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ForumReportComment } from '../_models/forum-report-comment';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class ForumReportCommentService extends AbstractService<ForumReportComment> {

  constructor(protected _http: HttpClient) {
    super(_http, environment.apiUrl+"/api/ForumReportComments/");
  }
}
