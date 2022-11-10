import { TestBed } from '@angular/core/testing';

import { BmiDataRepositoryService } from './bmi-data-repository.service';

describe('BmiDataRepositoryService', () => {
  let service: BmiDataRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BmiDataRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
