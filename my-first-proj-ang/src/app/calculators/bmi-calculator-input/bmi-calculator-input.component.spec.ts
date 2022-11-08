import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiCalculatorInputComponent } from './bmi-calculator-input.component';

describe('BmiCalculatorInputComponent', () => {
  let component: BmiCalculatorInputComponent;
  let fixture: ComponentFixture<BmiCalculatorInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmiCalculatorInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmiCalculatorInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
