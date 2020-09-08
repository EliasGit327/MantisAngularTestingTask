import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatedTablePageComponent } from './paginated-table-page.component';

describe('PaginatedTablePageComponent', () => {
  let component: PaginatedTablePageComponent;
  let fixture: ComponentFixture<PaginatedTablePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginatedTablePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatedTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
