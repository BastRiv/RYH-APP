import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
})
export class MainPagePage implements OnInit {

  constructor( private navCtrl: NavController ) { }

  ngOnInit() {
  }

  goMoreInfo(){
    this.navCtrl.navigateForward('/main-page/more')  
  }

}
