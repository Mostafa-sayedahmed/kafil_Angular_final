import { TestBed } from '@angular/core/testing';

import { PortfoloisService } from './portfolois.service';

describe('PortfoloisService', () => {
  let service: PortfoloisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfoloisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
