import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegisterCompletedComponent } from './form-register-completed.component';

describe('FormRegisterCompletedComponent', () => {
  let component: FormRegisterCompletedComponent;
  let fixture: ComponentFixture<FormRegisterCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRegisterCompletedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRegisterCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
