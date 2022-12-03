import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadPagePageRoutingModule } from './load-page-routing.module';

import { LoadPagePage } from './load-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadPagePageRoutingModule
  ],
  declarations: [LoadPagePage]
})
export class LoadPagePageModule {}
