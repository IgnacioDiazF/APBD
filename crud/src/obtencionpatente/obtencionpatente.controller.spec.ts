import { Test, TestingModule } from '@nestjs/testing';
import { ObtencionpatenteController } from './obtencionpatente.controller';

describe('Obtencionpatente Controller', () => {
  let controller: ObtencionpatenteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ObtencionpatenteController],
    }).compile();

    controller = module.get<ObtencionpatenteController>(ObtencionpatenteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
