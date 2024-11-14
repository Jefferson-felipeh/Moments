import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMomentsComponent } from './about-moments.component';

describe('AboutMomentsComponent', () => {
  let component: AboutMomentsComponent;
  let fixture: ComponentFixture<AboutMomentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMomentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMomentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
