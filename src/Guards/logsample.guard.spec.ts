import { TestBed } from '@angular/core/testing';

import { LogsampleGuard } from './logsample.guard';

describe('LogsampleGuard', () => {
  let guard: LogsampleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LogsampleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
