import { TestBed } from '@angular/core/testing';

import { DecaisseService } from './decaisse.service';

describe('DecaisseService', () => {
  let service: DecaisseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DecaisseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
