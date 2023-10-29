import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footwear3Component } from './footwear3.component';

describe('Footwear3Component', () => {
  let component: Footwear3Component;
  let fixture: ComponentFixture<Footwear3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Footwear3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footwear3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
