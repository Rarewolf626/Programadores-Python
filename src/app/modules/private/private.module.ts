import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { HomeComponent } from './components/home/home.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    PrivateComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    ComponentsModule
  ]
})
export class PrivateModule { }
