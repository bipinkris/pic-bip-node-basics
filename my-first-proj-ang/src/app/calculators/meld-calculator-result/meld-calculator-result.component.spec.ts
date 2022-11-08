import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeldCalculatorResultComponent } from './meld-calculator-result.component';

describe('MeldCalculatorResultComponent', () => {
  let component: MeldCalculatorResultComponent;
  let fixture: ComponentFixture<MeldCalculatorResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeldCalculatorResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeldCalculatorResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
