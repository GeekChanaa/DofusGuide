/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ForumReportService } from './forum-report.service';

describe('Service: ForumReport', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForumReportService]
    });
  });

  it('should ...', inject([ForumReportService], (service: ForumReportService) => {
    expect(service).toBeTruthy();
  }));
});
