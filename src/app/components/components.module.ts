import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiInputComponent } from './ui-input/ui-input.component';
import { UiPasswordInputComponent } from './ui-password-input/ui-password-input.component';
import { PrimeNgImportsModule } from '../prime-ng-imports/prime-ng-imports.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UiInputComponent,
    UiPasswordInputComponent
  ],
  imports: [
    CommonModule,
    PrimeNgImportsModule,
    FormsModule
  ],
  exports :[
    UiInputComponent,
    UiPasswordInputComponent
  ]
})
export class ComponentsModule { }
