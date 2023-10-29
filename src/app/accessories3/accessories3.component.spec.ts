import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accessories3Component } from './accessories3.component';

describe('Accessories3Component', () => {
  let component: Accessories3Component;
  let fixture: ComponentFixture<Accessories3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Accessories3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Accessories3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
