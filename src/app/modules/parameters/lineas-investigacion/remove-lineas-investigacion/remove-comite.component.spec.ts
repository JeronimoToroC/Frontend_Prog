import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveLineasInvestigacionComponent } from './remove-lineas-investigacion.component';

describe('Removelineas-investigacionComponent', () => {
  let component: RemoveLineasInvestigacionComponent;
  let fixture: ComponentFixture<RemoveLineasInvestigacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveLineasInvestigacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveLineasInvestigacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
