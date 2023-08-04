import { TestBed } from '@angular/core/testing';

import { RebrickableApiService } from './rebrickable-api.service';

describe('RebrickableApiService', () => {
  let service: RebrickableApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RebrickableApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
