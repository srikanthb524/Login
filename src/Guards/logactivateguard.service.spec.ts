import { TestBed } from '@angular/core/testing';

import { LogactivateguardService } from './logactivateguard.service';

describe('LogactivateguardService', () => {
  let service: LogactivateguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogactivateguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
