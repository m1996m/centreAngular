import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitStockEditComponent } from './produit-stock-edit.component';

describe('ProduitStockEditComponent', () => {
  let component: ProduitStockEditComponent;
  let fixture: ComponentFixture<ProduitStockEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitStockEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitStockEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
