import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeRayonCreateComponent } from './type-rayon-create.component';

describe('TypeRayonCreateComponent', () => {
  let component: TypeRayonCreateComponent;
  let fixture: ComponentFixture<TypeRayonCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeRayonCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeRayonCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
