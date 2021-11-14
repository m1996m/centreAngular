import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeProduitCreateComponent } from './type-produit-create.component';

describe('TypeProduitCreateComponent', () => {
  let component: TypeProduitCreateComponent;
  let fixture: ComponentFixture<TypeProduitCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeProduitCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeProduitCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
