import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiIconBadgeComponent } from './ui-icon-badge.component';

describe('UiIconBadgeComponent', () => {
  let component: UiIconBadgeComponent;
  let fixture: ComponentFixture<UiIconBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiIconBadgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiIconBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
