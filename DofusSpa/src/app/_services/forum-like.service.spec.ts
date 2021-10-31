import { TestBed } from '@angular/core/testing';

import { ForumLikeService } from './forum-like.service';

describe('ForumLikeService', () => {
  let service: ForumLikeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForumLikeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
