import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitStockCreateComponent } from './produit-stock-create.component';

describe('ProduitStockCreateComponent', () => {
  let component: ProduitStockCreateComponent;
  let fixture: ComponentFixture<ProduitStockCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitStockCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitStockCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
