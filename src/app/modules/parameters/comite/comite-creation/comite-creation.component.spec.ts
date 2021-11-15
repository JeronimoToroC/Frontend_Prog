import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComiteCreationComponent } from './comite-creation.component';

describe('ComiteCreationComponent', () => {
  let component: ComiteCreationComponent;
  let fixture: ComponentFixture<ComiteCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComiteCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComiteCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
