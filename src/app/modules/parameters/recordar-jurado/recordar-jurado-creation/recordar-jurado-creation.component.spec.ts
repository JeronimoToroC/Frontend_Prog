import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordarJuradoCreationComponent } from './recordar-jurado-creation.component';

describe('RecordarJuradoCreationComponent', () => {
  let component: RecordarJuradoCreationComponent;
  let fixture: ComponentFixture<RecordarJuradoCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordarJuradoCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordarJuradoCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
