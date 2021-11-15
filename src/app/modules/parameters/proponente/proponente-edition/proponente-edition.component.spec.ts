import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProponenteEditionComponent } from './proponente-edition.component';

describe('ProponenteEditionComponent', () => {
  let component: ProponenteEditionComponent;
  let fixture: ComponentFixture<ProponenteEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProponenteEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProponenteEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
