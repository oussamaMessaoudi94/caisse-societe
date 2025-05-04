import { TestBed } from '@angular/core/testing';

import { EncaisseService } from './encaisse.service';

describe('EncaisseService', () => {
  let service: EncaisseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncaisseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
