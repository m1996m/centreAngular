import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitStockShowComponent } from './produit-stock-show.component';

describe('ProduitStockShowComponent', () => {
  let component: ProduitStockShowComponent;
  let fixture: ComponentFixture<ProduitStockShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitStockShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitStockShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
