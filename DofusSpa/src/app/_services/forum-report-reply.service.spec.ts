/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ForumReportReplyService } from './forum-report-reply.service';

describe('Service: ForumReportReply', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForumReportReplyService]
    });
  });

  it('should ...', inject([ForumReportReplyService], (service: ForumReportReplyService) => {
    expect(service).toBeTruthy();
  }));
});
