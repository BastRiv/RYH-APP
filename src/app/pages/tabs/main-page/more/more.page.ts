import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ImgPage } from './img/img.page';

@Component({
  selector: 'app-more',
  templateUrl: './more.page.html',
  styleUrls: ['./more.page.scss'],
})
export class MorePage implements OnInit {

  constructor( private navCtrl: NavController,
               private modalCtrl: ModalController ) { }

  ngOnInit() {
  }

  goBack() { 
    this.navCtrl.navigateBack('/tabs/main-page')
  }

async openModal() { 
  const modal = await this.modalCtrl.create( { 
    component: ImgPage,
    
  } ); 
  await modal.present();
}



}
