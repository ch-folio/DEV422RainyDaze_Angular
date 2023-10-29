import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footwear1Component } from './footwear1.component';

describe('Footwear1Component', () => {
  let component: Footwear1Component;
  let fixture: ComponentFixture<Footwear1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Footwear1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footwear1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
