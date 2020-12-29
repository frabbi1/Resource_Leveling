import { TestBed } from '@angular/core/testing';

import { BurgessService } from './burgess.service';

describe('BurgessService', () => {
  let service: BurgessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BurgessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
