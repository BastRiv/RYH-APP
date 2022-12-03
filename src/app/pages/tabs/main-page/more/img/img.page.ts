import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';

import SwiperCore, { Autoplay, EffectCoverflow, Pagination, SwiperOptions } from 'swiper';



SwiperCore.use([Autoplay, Pagination, EffectCoverflow,]);

@Component({
  selector: 'app-img',
  templateUrl: './img.page.html',
  styleUrls: ['./img.page.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ImgPage implements OnInit {
  config: SwiperOptions ={ 
    slidesPerView: 1,
    pagination:true,
    autoplay:true,
    loop:true,
    effect: 'coverflow',
  };

  constructor( private modalCtrl: ModalController ) { 
    
  }

  ngOnInit() {
  }

  

  dismiss(){ 
    this.modalCtrl.dismiss();
  }

}
