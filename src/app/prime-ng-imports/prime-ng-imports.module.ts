import { NgModule } from '@angular/core';
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';

@NgModule({
  exports : [
    PasswordModule,
    InputTextModule,
    ButtonModule
  ]
})
export class PrimeNgImportsModule { }
