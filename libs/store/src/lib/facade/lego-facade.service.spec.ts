import { TestBed } from '@angular/core/testing';

import { LegoFacadeService } from './lego-facade.service';

describe('LegoFacadeService', () => {
  let service: LegoFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegoFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
