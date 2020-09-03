import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRequestPageComponent } from './all-request-page.component';

describe('RequestPageComponent', () => {
  let component: AllRequestPageComponent;
  let fixture: ComponentFixture<AllRequestPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRequestPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRequestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
