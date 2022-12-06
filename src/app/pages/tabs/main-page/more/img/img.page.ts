import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DirectoryServiceService } from 'src/app/services/directory-service.service';

import SwiperCore, { Autoplay, EffectCoverflow, Pagination, SwiperOptions } from 'swiper';



SwiperCore.use([Autoplay, Pagination, EffectCoverflow,]);

@Component({
  selector: 'app-img',
  templateUrl: './img.page.html',
  styleUrls: ['./img.page.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ImgPage implements OnInit {
  
  propertyid:any;
  propertyInfo:any;
  token:any;

  config: SwiperOptions ={ 
    slidesPerView: 1,
    pagination:true,
    autoplay:true,
    loop:true,
    effect: 'coverflow',
  };

  constructor( private modalCtrl: ModalController,
               private directoryService: DirectoryServiceService ) { 

          this.propertyid = JSON.parse(localStorage.getItem('propertyid')!);
          this.token = JSON.parse(localStorage.getItem('userData')!).token;
  }

  ngOnInit() {
    this.getPropertyInfo();
  }

  getPropertyInfo(){
    this.directoryService.getPropertyInfo(this.token,this.propertyid)
    .then(data=>{
      this.propertyInfo = data;
      console.log('producto', this.propertyInfo)
    })
    .catch(error=>{
      console.log(error);
    })
  }


  

  dismiss(){ 
    this.modalCtrl.dismiss();
  }

}
