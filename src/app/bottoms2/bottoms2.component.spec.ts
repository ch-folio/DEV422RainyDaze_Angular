import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bottoms2Component } from './bottoms2.component';

describe('Bottoms2Component', () => {
  let component: Bottoms2Component;
  let fixture: ComponentFixture<Bottoms2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bottoms2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bottoms2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
