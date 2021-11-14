import { TestBed } from '@angular/core/testing';

import { ProduitStockService } from './produit-stock.service';

describe('ProduitStockService', () => {
  let service: ProduitStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProduitStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
