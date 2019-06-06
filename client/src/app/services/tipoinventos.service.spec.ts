import { TestBed } from '@angular/core/testing';

import { TipoinventosService } from './tipoinventos.service';

describe('TipoinventosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoinventosService = TestBed.get(TipoinventosService);
    expect(service).toBeTruthy();
  });
});
