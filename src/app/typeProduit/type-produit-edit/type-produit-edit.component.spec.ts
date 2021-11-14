import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeProduitEditComponent } from './type-produit-edit.component';

describe('TypeProduitEditComponent', () => {
  let component: TypeProduitEditComponent;
  let fixture: ComponentFixture<TypeProduitEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeProduitEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeProduitEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
