import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bottoms1Component } from './bottoms1.component';

describe('Bottoms1Component', () => {
  let component: Bottoms1Component;
  let fixture: ComponentFixture<Bottoms1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bottoms1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bottoms1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
