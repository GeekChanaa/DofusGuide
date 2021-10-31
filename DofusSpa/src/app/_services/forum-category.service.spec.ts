import { TestBed } from '@angular/core/testing';

import { ForumCategoryService } from './forum-category.service';

describe('ForumCategoryService', () => {
  let service: ForumCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForumCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
