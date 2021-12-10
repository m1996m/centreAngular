import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeRayonComponent } from './type-rayon.component';

describe('TypeRayonComponent', () => {
  let component: TypeRayonComponent;
  let fixture: ComponentFixture<TypeRayonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeRayonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeRayonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
