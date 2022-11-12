import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiMenuBarComponent } from './ui-menu-bar.component';

describe('UiMenuBarComponent', () => {
  let component: UiMenuBarComponent;
  let fixture: ComponentFixture<UiMenuBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiMenuBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiMenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
