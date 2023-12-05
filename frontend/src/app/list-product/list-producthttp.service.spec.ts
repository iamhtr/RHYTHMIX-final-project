import { TestBed } from '@angular/core/testing';

import { ListProducthttpService } from './list-producthttp.service';

describe('ListProducthttpService', () => {
  let service: ListProducthttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListProducthttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
