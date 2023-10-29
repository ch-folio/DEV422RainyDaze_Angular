import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tops4Component } from './tops4.component';

describe('Tops4Component', () => {
  let component: Tops4Component;
  let fixture: ComponentFixture<Tops4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tops4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tops4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
