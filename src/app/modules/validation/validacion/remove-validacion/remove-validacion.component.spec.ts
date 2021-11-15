import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveValidacionComponent } from './remove-validacion.component';

describe('RemoveValidacionComponent', () => {
  let component: RemoveValidacionComponent;
  let fixture: ComponentFixture<RemoveValidacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveValidacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveValidacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
