import { TestBed } from '@angular/core/testing';

import { MyAnnouncesService } from './my-announces.service';

describe('MyAnnouncesService', () => {
  let service: MyAnnouncesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyAnnouncesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
