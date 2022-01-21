import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ForumReport } from '../_models/forum-report';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class ForumReportService extends AbstractService<ForumReport> {

  constructor(protected _http: HttpClient) {
    super(_http, environment.apiUrl+"/api/ForumReports/");
  }
}
