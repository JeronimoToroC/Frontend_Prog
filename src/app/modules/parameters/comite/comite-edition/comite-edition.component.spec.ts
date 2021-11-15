import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComiteEditionComponent } from './comite-edition.component';

describe('ComiteEditionComponent', () => {
  let component: ComiteEditionComponent;
  let fixture: ComponentFixture<ComiteEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComiteEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComiteEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
