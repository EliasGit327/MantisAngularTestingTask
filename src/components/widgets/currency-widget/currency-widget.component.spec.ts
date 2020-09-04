import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyWidgetComponent } from './currency-widget.component';

describe('CurrencyWidgetComponent', () => {
  let component: CurrencyWidgetComponent;
  let fixture: ComponentFixture<CurrencyWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
