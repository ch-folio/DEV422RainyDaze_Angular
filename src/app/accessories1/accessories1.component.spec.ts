import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accessories1Component } from './accessories1.component';

describe('Accessories1Component', () => {
  let component: Accessories1Component;
  let fixture: ComponentFixture<Accessories1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Accessories1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Accessories1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
