import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';

import { IonicModule } from '@ionic/angular';

import { ImgPageRoutingModule } from './img-routing.module';

import { ImgPage } from './img.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImgPageRoutingModule,
    SwiperModule
  ],
  declarations: [ImgPage]
})
export class ImgPageModule {}
