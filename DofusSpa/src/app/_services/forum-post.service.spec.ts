import { TestBed } from '@angular/core/testing';

import { ForumPostService } from './forum-post.service';

describe('ForumPostService', () => {
  let service: ForumPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForumPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
