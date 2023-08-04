import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeContextComponent } from './change-context.component';

describe('ChangeContextComponent', () => {
  let component: ChangeContextComponent;
  let fixture: ComponentFixture<ChangeContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeContextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
