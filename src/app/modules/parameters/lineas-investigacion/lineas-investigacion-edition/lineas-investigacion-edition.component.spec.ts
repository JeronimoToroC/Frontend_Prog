import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineasInvestigacionEditionComponent } from './lineas-investigacion-edition.component';

describe('lineas-investigacionEditionComponent', () => {
  let component: LineasInvestigacionEditionComponent;
  let fixture: ComponentFixture<LineasInvestigacionEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineasInvestigacionEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineasInvestigacionEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
