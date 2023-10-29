import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Outer4Component } from './outer4.component';

describe('Outer4Component', () => {
  let component: Outer4Component;
  let fixture: ComponentFixture<Outer4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Outer4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Outer4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
