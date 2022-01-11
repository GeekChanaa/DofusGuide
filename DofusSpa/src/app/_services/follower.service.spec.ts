/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FollowerService } from './follower.service';

describe('Service: Follower', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FollowerService]
    });
  });

  it('should ...', inject([FollowerService], (service: FollowerService) => {
    expect(service).toBeTruthy();
  }));
});
