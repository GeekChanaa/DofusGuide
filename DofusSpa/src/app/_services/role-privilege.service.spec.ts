import { TestBed } from '@angular/core/testing';

import { RolePrivilegeService } from './role-privilege.service';

describe('RolePrivilegeService', () => {
  let service: RolePrivilegeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolePrivilegeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
