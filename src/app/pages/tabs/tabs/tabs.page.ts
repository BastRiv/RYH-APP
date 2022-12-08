import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor( private alertCtrl: AlertController,
               private navCtrl: NavController ) { }

  ngOnInit() {
  }

  async logout(){
    let alert =  await this.alertCtrl.create({
        
      
        header: 'Cerrar Sesion',
        message: '¿Está segur@?',
        buttons: [
          {
            text: 'Volver',
            role: 'cancel',
            handler: () => {
              console.log('Cancel');
            }
          }, {
            text: 'Cerrar sesion',
            handler: () => {
              localStorage.clear();
              this.navCtrl.navigateBack('login').then(()=>{
               
                window.location.reload();
              });
             }
          }
        ]
    })
   alert.present();
  
  }

}
