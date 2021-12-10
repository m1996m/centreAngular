import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RayonShowComponent } from './rayon-show.component';

describe('RayonShowComponent', () => {
  let component: RayonShowComponent;
  let fixture: ComponentFixture<RayonShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RayonShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RayonShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
