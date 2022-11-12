import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSideBarComponent } from './ui-side-bar.component';

describe('UiSideBarComponent', () => {
  let component: UiSideBarComponent;
  let fixture: ComponentFixture<UiSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiSideBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
