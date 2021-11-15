import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProponenteListComponent } from './proponente-list.component';

describe('ProponenteListComponent', () => {
  let component: ProponenteListComponent;
  let fixture: ComponentFixture<ProponenteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProponenteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProponenteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
