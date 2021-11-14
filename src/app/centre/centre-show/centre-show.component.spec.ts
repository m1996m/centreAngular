import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreShowComponent } from './centre-show.component';

describe('CentreShowComponent', () => {
  let component: CentreShowComponent;
  let fixture: ComponentFixture<CentreShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentreShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentreShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
