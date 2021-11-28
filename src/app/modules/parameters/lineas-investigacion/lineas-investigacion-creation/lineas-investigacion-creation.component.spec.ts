import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineasInvestigacionCreationComponent } from './lineas-investigacion-creation.component';

describe('lineas-investigacionCreationComponent', () => {
  let component: LineasInvestigacionCreationComponent;
  let fixture: ComponentFixture<LineasInvestigacionCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineasInvestigacionCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineasInvestigacionCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
