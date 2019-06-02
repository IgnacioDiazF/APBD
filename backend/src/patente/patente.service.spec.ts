import { Test, TestingModule } from '@nestjs/testing';
import { PatenteService } from './patente.service';

describe('PatenteService', () => {
  let service: PatenteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatenteService],
    }).compile();

    service = module.get<PatenteService>(PatenteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
