import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRequestPageComponent } from './get-request-page.component';

describe('GetRequestPageComponent', () => {
  let component: GetRequestPageComponent;
  let fixture: ComponentFixture<GetRequestPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetRequestPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetRequestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
