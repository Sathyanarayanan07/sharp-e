import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth-guard.service';

describe('AuthServiceService', () => {
  let service: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
