import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tops3Component } from './tops3.component';

describe('Tops3Component', () => {
  let component: Tops3Component;
  let fixture: ComponentFixture<Tops3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tops3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tops3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
