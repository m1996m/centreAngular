import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeRayonEditComponent } from './type-rayon-edit.component';

describe('TypeRayonEditComponent', () => {
  let component: TypeRayonEditComponent;
  let fixture: ComponentFixture<TypeRayonEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeRayonEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeRayonEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
