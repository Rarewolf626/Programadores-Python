import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    PublicComponent,
    LoginComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ComponentsModule
  ]
})
export class PublicModule { }
