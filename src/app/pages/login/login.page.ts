import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { AuthorizationServiceService } from 'src/app/services/authorization-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userData = {"username": "","password": ""};
  responseData:any;
  token:any;
  user:any;


  constructor(private navCtrl: NavController,
    private authService: AuthorizationServiceService,
    private toast: ToastController,)
        {  
          
      
    }

  ngOnInit() {
    const token = localStorage.getItem('userData'); 
    if(token != null) {
      this.navCtrl.navigateForward('load-page')
      console.log('OK',token)
    }
  }


  login(){
    this.userData["username"] = this.userData["username"].toLowerCase();
    this.authService.postData(this.userData).then((result:any) => {
     this.responseData = result;
     console.log(this.responseData);
     localStorage.setItem('userData', JSON.stringify(this.responseData));
     this.navCtrl.navigateForward('/load-page')

        

  
   }, async (err:any) => {
       let toast = await this.toast.create({
         message: 'Usuario y/o contraseña incorrecta',
         duration: 5000,
         color: "danger",
         cssClass:'custom-toast',
         buttons: [ { 
          text:'Descartar',
          role: 'cancelar'
          } ]

       });
   toast.present();
   });

 }

  goPass() { 
    this.navCtrl.navigateForward('/reset-pass')
  }

  goNewAccount() { 
    this.navCtrl.navigateForward('/new-account')
  }

  goMainPage() {
    this.navCtrl.navigateForward('/tabs/main-page')
  }

}
