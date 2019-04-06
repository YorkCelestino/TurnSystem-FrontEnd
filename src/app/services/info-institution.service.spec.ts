import { TestBed } from '@angular/core/testing';

import { InfoInstitutionService } from './info-institution.service';

describe('InfoInstitutionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoInstitutionService = TestBed.get(InfoInstitutionService);
    expect(service).toBeTruthy();
  });
});
