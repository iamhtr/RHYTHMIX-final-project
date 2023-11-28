import { TestBed } from '@angular/core/testing';

import { TredingPhhtpService } from './treding-phhtp.service';

describe('TredingPhhtpService', () => {
  let service: TredingPhhtpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TredingPhhtpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
