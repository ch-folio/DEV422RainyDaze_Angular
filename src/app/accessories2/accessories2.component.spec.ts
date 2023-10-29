import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accessories2Component } from './accessories2.component';

describe('Accessories2Component', () => {
  let component: Accessories2Component;
  let fixture: ComponentFixture<Accessories2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Accessories2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Accessories2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
