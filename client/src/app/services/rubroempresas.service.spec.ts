import { TestBed } from '@angular/core/testing';

import { RubroempresasService } from './rubroempresas.service';

describe('RubroempresasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RubroempresasService = TestBed.get(RubroempresasService);
    expect(service).toBeTruthy();
  });
});
