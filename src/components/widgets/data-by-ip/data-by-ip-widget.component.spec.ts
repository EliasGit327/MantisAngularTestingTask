import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataByIpWidgetComponent } from './data-by-ip-widget.component';

describe('DataByIpComponent', () => {
  let component: DataByIpWidgetComponent;
  let fixture: ComponentFixture<DataByIpWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataByIpWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataByIpWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
