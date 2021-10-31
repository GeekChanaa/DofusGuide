import { TestBed } from '@angular/core/testing';

import { ForumReplyService } from './forum-reply.service';

describe('ForumReplyService', () => {
  let service: ForumReplyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForumReplyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
