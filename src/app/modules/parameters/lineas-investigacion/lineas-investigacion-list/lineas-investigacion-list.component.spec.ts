import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineasInvestigacionListComponent } from './lineas-investigacion-list.component';

describe('lineas-investigacionListComponent', () => {
  let component: LineasInvestigacionListComponent;
  let fixture: ComponentFixture<LineasInvestigacionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineasInvestigacionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineasInvestigacionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
