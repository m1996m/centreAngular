import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseurCreateComponent } from './fournisseur-create.component';

describe('FournisseurCreateComponent', () => {
  let component: FournisseurCreateComponent;
  let fixture: ComponentFixture<FournisseurCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FournisseurCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FournisseurCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
