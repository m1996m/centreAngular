import { TestBed } from '@angular/core/testing';

import { FourniseurCentreService } from './fourniseur-centre.service';

describe('FourniseurCentreService', () => {
  let service: FourniseurCentreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FourniseurCentreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
