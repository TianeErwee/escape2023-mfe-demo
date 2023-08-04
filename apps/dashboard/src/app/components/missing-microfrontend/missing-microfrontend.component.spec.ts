import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MissingMicrofrontendComponent } from './missing-microfrontend.component';

describe('MissingMicrofrontendComponent', () => {
  let component: MissingMicrofrontendComponent;
  let fixture: ComponentFixture<MissingMicrofrontendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissingMicrofrontendComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MissingMicrofrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
