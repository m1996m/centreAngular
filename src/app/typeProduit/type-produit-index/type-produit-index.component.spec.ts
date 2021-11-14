import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeProduitIndexComponent } from './type-produit-index.component';

describe('TypeProduitIndexComponent', () => {
  let component: TypeProduitIndexComponent;
  let fixture: ComponentFixture<TypeProduitIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeProduitIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeProduitIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
