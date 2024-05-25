import { TestBed } from '@angular/core/testing';

import { CFSubmissionService } from './cfsubmission.service';

describe('CFSubmissionService', () => {
  let service: CFSubmissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CFSubmissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
