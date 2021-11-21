import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitShowComponent } from './produit-show.component';

describe('ProduitShowComponent', () => {
  let component: ProduitShowComponent;
  let fixture: ComponentFixture<ProduitShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
