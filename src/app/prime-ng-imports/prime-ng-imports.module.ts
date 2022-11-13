import { NgModule } from '@angular/core';
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {CarouselModule} from 'primeng/carousel';
import {CardModule} from 'primeng/card';
import { RatingModule} from 'primeng/rating';
@NgModule({
  exports : [
    PasswordModule,
    InputTextModule,
    ButtonModule,
    MenubarModule,
    AvatarModule,
    AvatarGroupModule,
    CarouselModule,
    CardModule,
    RatingModule
  ]
})
export class PrimeNgImportsModule { }
