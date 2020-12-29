import { TestBed } from '@angular/core/testing';

import { MinimizedService } from './minimized.service';

describe('MinimizedService', () => {
  let service: MinimizedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinimizedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
