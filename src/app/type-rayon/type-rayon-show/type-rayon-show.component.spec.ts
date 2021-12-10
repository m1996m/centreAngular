import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeRayonShowComponent } from './type-rayon-show.component';

describe('TypeRayonShowComponent', () => {
  let component: TypeRayonShowComponent;
  let fixture: ComponentFixture<TypeRayonShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeRayonShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeRayonShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
