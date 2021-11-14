import { TestBed } from '@angular/core/testing';

import { TypeRayonService } from './type-rayon.service';

describe('TypeRayonService', () => {
  let service: TypeRayonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeRayonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
