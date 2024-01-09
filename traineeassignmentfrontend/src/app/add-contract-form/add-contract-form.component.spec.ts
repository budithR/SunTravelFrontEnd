import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContractFormComponent } from './add-contract-form.component';

describe('AddContractFormComponent', () => {
  let component: AddContractFormComponent;
  let fixture: ComponentFixture<AddContractFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddContractFormComponent]
    });
    fixture = TestBed.createComponent(AddContractFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
