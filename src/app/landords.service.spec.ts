import { TestBed } from '@angular/core/testing';

import { LandordsService } from './landords.service';

describe('LandordsService', () => {
  let service: LandordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
