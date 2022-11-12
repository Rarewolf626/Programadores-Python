import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiInputComponent } from './ui-input/ui-input.component';
import { UiPasswordInputComponent } from './ui-password-input/ui-password-input.component';
import { PrimeNgImportsModule } from '../prime-ng-imports/prime-ng-imports.module';
import { FormsModule } from '@angular/forms';
import { UiLinkLabelComponent } from './ui-link-label/ui-link-label.component';
import { RouterModule } from '@angular/router';
import { UiSideBarComponent } from './ui-side-bar/ui-side-bar.component';
import { UiMenuBarComponent } from './ui-menu-bar/ui-menu-bar.component';



@NgModule({
  declarations: [
    UiInputComponent,
    UiPasswordInputComponent,
    UiLinkLabelComponent,
    UiSideBarComponent,
    UiMenuBarComponent
  ],
  imports: [
    CommonModule,
    PrimeNgImportsModule,
    FormsModule,
    RouterModule
  ],
  exports :[
    UiInputComponent,
    UiPasswordInputComponent,
    UiLinkLabelComponent,
    UiMenuBarComponent
  ]
})
export class ComponentsModule { }
