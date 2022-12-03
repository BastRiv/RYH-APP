import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthorizationServiceService } from 'src/app/services/authorization-service.service';

@Component({
  selector: 'app-load-page',
  templateUrl: './load-page.page.html',
  styleUrls: ['./load-page.page.scss'],
})
export class LoadPagePage implements OnInit {


  progress = 0;
  profile:any;

  constructor(private navCtrl: NavController,) { 
    setInterval(()=>{
      this.progress += .02;
    }, 100)
    setTimeout(()=>{
      this.navCtrl.navigateForward('tabs/main-page')
    }, 6000)
    
  }

  ngOnInit() {
  }

}
