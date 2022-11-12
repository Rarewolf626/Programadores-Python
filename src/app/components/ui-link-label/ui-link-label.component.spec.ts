import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiLinkLabelComponent } from './ui-link-label.component';

describe('UiLinkLabelComponent', () => {
  let component: UiLinkLabelComponent;
  let fixture: ComponentFixture<UiLinkLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiLinkLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiLinkLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
