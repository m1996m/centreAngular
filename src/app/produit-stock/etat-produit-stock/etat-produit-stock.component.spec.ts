import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatProduitStockComponent } from './etat-produit-stock.component';

describe('EtatProduitStockComponent', () => {
  let component: EtatProduitStockComponent;
  let fixture: ComponentFixture<EtatProduitStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtatProduitStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatProduitStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
