import { TestBed } from '@angular/core/testing';

import { ForumCommentService } from './forum-comment.service';

describe('ForumCommentService', () => {
  let service: ForumCommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForumCommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
