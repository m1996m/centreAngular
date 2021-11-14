import { TestBed } from '@angular/core/testing';

import { ClientCentreService } from './client-centre.service';

describe('ClientCentreService', () => {
  let service: ClientCentreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientCentreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
