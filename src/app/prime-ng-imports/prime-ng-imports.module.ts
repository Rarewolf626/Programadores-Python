import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  exports : [
    PasswordModule,
    InputTextModule
  ]
})
export class PrimeNgImportsModule { }
