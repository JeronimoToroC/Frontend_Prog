import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadCreationComponent } from './entidad-creation.component';

describe('EntidadCreationComponent', () => {
  let component: EntidadCreationComponent;
  let fixture: ComponentFixture<EntidadCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntidadCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntidadCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
