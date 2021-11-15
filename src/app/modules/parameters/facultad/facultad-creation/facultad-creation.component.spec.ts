import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultadCreationComponent } from './facultad-creation.component';

describe('FacultadCreationComponent', () => {
  let component: FacultadCreationComponent;
  let fixture: ComponentFixture<FacultadCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultadCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultadCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
