import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFinalizedComponent } from './registration-finalized.component';

describe('RegistrationFinalizedComponent', () => {
  let component: RegistrationFinalizedComponent;
  let fixture: ComponentFixture<RegistrationFinalizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationFinalizedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationFinalizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
