import { Test, TestingModule } from '@nestjs/testing';
import { Allbooks2Controller } from './allbooks2.controller';
import { Allbooks2Service } from './allbooks2.service';

describe('Allbooks2Controller', () => {
  let controller: Allbooks2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Allbooks2Controller],
      providers: [Allbooks2Service],
    }).compile();

    controller = module.get<Allbooks2Controller>(Allbooks2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
