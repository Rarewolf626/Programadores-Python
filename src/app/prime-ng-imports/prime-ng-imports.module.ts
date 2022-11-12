import { NgModule } from '@angular/core';
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
@NgModule({
  exports : [
    PasswordModule,
    InputTextModule,
    ButtonModule,
    MenubarModule
  ]
})
export class PrimeNgImportsModule { }
