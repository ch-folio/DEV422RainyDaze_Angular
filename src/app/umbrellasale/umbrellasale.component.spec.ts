import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmbrellasaleComponent } from './umbrellasale.component';

describe('UmbrellasaleComponent', () => {
  let component: UmbrellasaleComponent;
  let fixture: ComponentFixture<UmbrellasaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UmbrellasaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UmbrellasaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
