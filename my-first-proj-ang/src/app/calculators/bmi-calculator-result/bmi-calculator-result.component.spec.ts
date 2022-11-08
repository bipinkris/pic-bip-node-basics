import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiCalculatorResultComponent } from './bmi-calculator-result.component';

describe('BmiCalculatorResultComponent', () => {
  let component: BmiCalculatorResultComponent;
  let fixture: ComponentFixture<BmiCalculatorResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmiCalculatorResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmiCalculatorResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
