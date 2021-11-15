import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProponenteCreationComponent } from './proponente-creation.component';

describe('ProponenteCreationComponent', () => {
  let component: ProponenteCreationComponent;
  let fixture: ComponentFixture<ProponenteCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProponenteCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProponenteCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
