import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingMicroFrontendComponent } from './missing-micro-frontend.component';

describe('MissingMicroFrontendComponent', () => {
  let component: MissingMicroFrontendComponent;
  let fixture: ComponentFixture<MissingMicroFrontendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MissingMicroFrontendComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingMicroFrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
