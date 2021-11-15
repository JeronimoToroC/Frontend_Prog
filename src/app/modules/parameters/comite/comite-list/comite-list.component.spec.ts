import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComiteListComponent } from './comite-list.component';

describe('ComiteListComponent', () => {
  let component: ComiteListComponent;
  let fixture: ComponentFixture<ComiteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComiteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComiteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
