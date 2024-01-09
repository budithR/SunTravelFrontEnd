import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingHotelAddContractComponent } from './existing-hotel-add-contract.component';

describe('ExistingHotelAddContractComponent', () => {
  let component: ExistingHotelAddContractComponent;
  let fixture: ComponentFixture<ExistingHotelAddContractComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExistingHotelAddContractComponent]
    });
    fixture = TestBed.createComponent(ExistingHotelAddContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
