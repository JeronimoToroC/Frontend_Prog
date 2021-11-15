import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProponentesMonthComponent } from './proponentes-month.component';

describe('ProponentesMonthComponent', () => {
  let component: ProponentesMonthComponent;
  let fixture: ComponentFixture<ProponentesMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProponentesMonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProponentesMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
