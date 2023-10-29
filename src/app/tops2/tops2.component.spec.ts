import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tops2Component } from './tops2.component';

describe('Tops2Component', () => {
  let component: Tops2Component;
  let fixture: ComponentFixture<Tops2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tops2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tops2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
