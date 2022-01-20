import { TestBed } from '@angular/core/testing';

import { AnnounceDetailService } from './announce-detail.service';

describe('AnnounceDetailService', () => {
  let service: AnnounceDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnounceDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
