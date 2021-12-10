import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RayonCreateComponent } from './rayon-create.component';

describe('RayonCreateComponent', () => {
  let component: RayonCreateComponent;
  let fixture: ComponentFixture<RayonCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RayonCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RayonCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
