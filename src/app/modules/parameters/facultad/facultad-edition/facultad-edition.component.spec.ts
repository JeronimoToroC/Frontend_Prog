import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultadEditionComponent } from './facultad-edition.component';

describe('FacultadEditionComponent', () => {
  let component: FacultadEditionComponent;
  let fixture: ComponentFixture<FacultadEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultadEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultadEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
