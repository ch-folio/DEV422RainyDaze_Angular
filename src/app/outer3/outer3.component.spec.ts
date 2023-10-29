import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Outer3Component } from './outer3.component';

describe('Outer3Component', () => {
  let component: Outer3Component;
  let fixture: ComponentFixture<Outer3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Outer3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Outer3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
