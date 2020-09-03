import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutRequestPageComponent } from './put-request-page.component';

describe('UpdateRequestPageComponent', () => {
  let component: PutRequestPageComponent;
  let fixture: ComponentFixture<PutRequestPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutRequestPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutRequestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
