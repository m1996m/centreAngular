import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreIndexComponent } from './centre-index.component';

describe('CentreIndexComponent', () => {
  let component: CentreIndexComponent;
  let fixture: ComponentFixture<CentreIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentreIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentreIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
