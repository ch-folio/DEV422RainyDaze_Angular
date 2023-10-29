import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tops1Component } from './tops1.component';

describe('Tops1Component', () => {
  let component: Tops1Component;
  let fixture: ComponentFixture<Tops1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tops1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tops1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
