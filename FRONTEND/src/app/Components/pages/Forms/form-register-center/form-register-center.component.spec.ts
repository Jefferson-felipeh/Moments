import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegisterCenterComponent } from './form-register-center.component';

describe('FormRegisterCenterComponent', () => {
  let component: FormRegisterCenterComponent;
  let fixture: ComponentFixture<FormRegisterCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRegisterCenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRegisterCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
