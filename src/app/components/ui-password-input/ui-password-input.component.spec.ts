import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPasswordInputComponent } from './ui-password-input.component';

describe('UiPasswordInputComponent', () => {
  let component: UiPasswordInputComponent;
  let fixture: ComponentFixture<UiPasswordInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiPasswordInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiPasswordInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
