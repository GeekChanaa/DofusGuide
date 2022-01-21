/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ForumReportCommentService } from './forum-report-comment.service';

describe('Service: ForumReportComment', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForumReportCommentService]
    });
  });

  it('should ...', inject([ForumReportCommentService], (service: ForumReportCommentService) => {
    expect(service).toBeTruthy();
  }));
});
