import { Test, TestingModule } from '@nestjs/testing';
import { Allbooks2Service } from './allbooks2.service';

describe('Allbooks2Service', () => {
  let service: Allbooks2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Allbooks2Service],
    }).compile();

    service = module.get<Allbooks2Service>(Allbooks2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
