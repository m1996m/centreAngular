import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenteShowComponent } from './vente-show.component';

describe('VenteShowComponent', () => {
  let component: VenteShowComponent;
  let fixture: ComponentFixture<VenteShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenteShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenteShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
