import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RayonEtatComponent } from './rayon-etat.component';

describe('RayonEtatComponent', () => {
  let component: RayonEtatComponent;
  let fixture: ComponentFixture<RayonEtatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RayonEtatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RayonEtatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
