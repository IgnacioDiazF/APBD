import { TestBed } from '@angular/core/testing';

import { PatentesService } from './patentes.service';

describe('PatentesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatentesService = TestBed.get(PatentesService);
    expect(service).toBeTruthy();
  });
});
