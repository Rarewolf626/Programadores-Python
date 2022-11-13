import { NgModule } from '@angular/core';
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
@NgModule({
  exports : [
    PasswordModule,
    InputTextModule,
    ButtonModule,
    MenubarModule,
    AvatarModule,
    AvatarGroupModule
  ]
})
export class PrimeNgImportsModule { }
