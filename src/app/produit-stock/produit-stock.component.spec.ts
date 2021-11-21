import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitStockComponent } from './produit-stock.component';

describe('ProduitStockComponent', () => {
  let component: ProduitStockComponent;
  let fixture: ComponentFixture<ProduitStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
