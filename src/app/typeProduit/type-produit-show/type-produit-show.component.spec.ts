import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeProduitShowComponent } from './type-produit-show.component';

describe('TypeProduitShowComponent', () => {
  let component: TypeProduitShowComponent;
  let fixture: ComponentFixture<TypeProduitShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeProduitShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeProduitShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
