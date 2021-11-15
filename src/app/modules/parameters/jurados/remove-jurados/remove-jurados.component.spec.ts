import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveJuradosComponent } from './remove-jurados.component';

describe('RemoveJuradosComponent', () => {
  let component: RemoveJuradosComponent;
  let fixture: ComponentFixture<RemoveJuradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveJuradosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveJuradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
