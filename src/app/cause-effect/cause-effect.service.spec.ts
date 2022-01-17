import { TestBed } from '@angular/core/testing';

import { CauseEffectService } from './cause-effect.service';

describe('CauseEffectService', () => {
  let service: CauseEffectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CauseEffectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
