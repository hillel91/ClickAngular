import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetACustomerComponent } from './get-a-customer.component';

describe('GetACustomerComponent', () => {
  let component: GetACustomerComponent;
  let fixture: ComponentFixture<GetACustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetACustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetACustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
