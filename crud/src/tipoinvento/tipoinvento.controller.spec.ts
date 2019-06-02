import { Test, TestingModule } from '@nestjs/testing';
import { TipoinventoController } from './tipoinvento.controller';

describe('Tipoinvento Controller', () => {
  let controller: TipoinventoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoinventoController],
    }).compile();

    controller = module.get<TipoinventoController>(TipoinventoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
