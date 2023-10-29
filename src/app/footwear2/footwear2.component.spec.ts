import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footwear2Component } from './footwear2.component';

describe('Footwear2Component', () => {
  let component: Footwear2Component;
  let fixture: ComponentFixture<Footwear2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Footwear2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footwear2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
