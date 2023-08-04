import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { mfeAvailableGuard } from './mfe-available.guard';

describe('mfeAvailableGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => mfeAvailableGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
