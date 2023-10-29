import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bottoms3Component } from './bottoms3.component';

describe('Bottoms3Component', () => {
  let component: Bottoms3Component;
  let fixture: ComponentFixture<Bottoms3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bottoms3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bottoms3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
