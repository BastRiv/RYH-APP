import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { AuthorizationServiceService } from 'src/app/services/authorization-service.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.page.html',
  styleUrls: ['./new-account.page.scss'],
})
export class NewAccountPage implements OnInit {
  userData = {"email": "", "password": "", "first_name": "", "last_name": "", "username": ""};
  responseData:any;

  constructor( private toastCtrl: ToastController,
    private authService: AuthorizationServiceService,
    private navCtrl: NavController,
    private loadCtrl: LoadingController) { }

  ngOnInit() {
  }


  registerNormal() {
    this.userData["username"] = this.userData.email.toLowerCase();
    this.authService.createUser(this.userData).then(async (result:any) => {
      console.log('Result', result)
        let toast = await this.toastCtrl.create({
          message: 'Se ha registrado correctamente',
          duration: 5000,
          color: "success",
          cssClass:'custom-toast',
          buttons: [ { 
            text:'Descartar',
            role:'Accept'
           } ]
        });
        toast.present();
        let load = await this.loadCtrl.create({
          message: 'Cargando complementos...',
          spinner:'crescent',
          duration:3000
        });
        await load.present();

        this.authService.postData(this.userData).then( (result) => {
          this.responseData = result;
          console.log(this.responseData);
          localStorage.setItem('userData', JSON.stringify(this.responseData));
          this.navCtrl.navigateForward('/load-page')
        });
        });

        if(this.userData["email"] == '' || this.userData["first_name"] == '' || 
          this.userData["last_name"] == '' || this.userData["password"] == ''){ 
            this.presentToast();
           }
    }

    async presentToast() {
      const toast = await this.toastCtrl.create({
        message: 'Debe llenar todos los campos',
        duration: 5000,
        color: "danger",
        cssClass:'custom-toast',
        buttons: [ 
          {
            text:'Descartar',
            role:'cancel',
          }
         ]
      });
  
      await toast.present();
    }
          

  goBack() { 
    this.navCtrl.navigateBack('/login')
  }

}
