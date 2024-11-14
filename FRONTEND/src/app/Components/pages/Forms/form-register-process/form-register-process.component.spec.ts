import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegisterProcessComponent } from './form-register-process.component';

describe('FormRegisterProcessComponent', () => {
  let component: FormRegisterProcessComponent;
  let fixture: ComponentFixture<FormRegisterProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRegisterProcessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRegisterProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
