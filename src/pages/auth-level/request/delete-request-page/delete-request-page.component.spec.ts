import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRequestPageComponent } from './delete-request-page.component';

describe('DeleteRequestPageComponent', () => {
  let component: DeleteRequestPageComponent;
  let fixture: ComponentFixture<DeleteRequestPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteRequestPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRequestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
