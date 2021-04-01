import { TestBed } from '@angular/core/testing';

import { CustomfireService } from './customfire.service';

describe('CustomfireService', () => {
  let service: CustomfireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomfireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
