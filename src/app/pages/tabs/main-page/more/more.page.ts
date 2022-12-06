import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { DirectoryServiceService } from 'src/app/services/directory-service.service';
import { ImgPage } from './img/img.page';

@Component({
  selector: 'app-more',
  templateUrl: './more.page.html',
  styleUrls: ['./more.page.scss'],
})
export class MorePage implements OnInit {

token:any; 
propertyid:any; 
propertyInfo:any;
serviceInfo:any;
userpk:any; 

  constructor( private navCtrl: NavController,
               private modalCtrl: ModalController,
               private directoryService: DirectoryServiceService,
               private route: ActivatedRoute,
               private router:Router ) { 

                this.route.queryParams.subscribe( params => { 
                  this.propertyid = params['propertyId']
                 } )

                this.token = JSON.parse(localStorage.getItem('userData')!).token;
                this.userpk = JSON.parse(localStorage.getItem('profile_data')!).pk;
               }

  ngOnInit() {
    this.getPropertyInfo();
    this.getServicesProperty();
  }

  goBack() { 
    this.navCtrl.navigateBack('/tabs/main-page')
  }


  getPropertyInfo() {
    this.directoryService.getPropertyInfo(this.token,this.propertyid)
    .then(data=>{
      this.propertyInfo = data;
      console.log('producto', this.propertyInfo)
    })
    .catch(error=>{
      console.log(error);
    })
  }


  getServicesProperty() { 
    this.directoryService.getOneServicesProperty(this.token, this.propertyid)
    .then(data => { 
       this.serviceInfo = data;
       console.log(this.serviceInfo);
     })
     .catch( error => { 
      console.log(error)
      } )
   }

   makeReservation() {  
    let dataRe = {
      code: 1122,
      property: this.propertyid,
      user:this.userpk
    }
    this.directoryService.MakeReservation(this.token, dataRe)
    .then( data => { 
      console.log(data);
     } )
     .catch( error => { 
      console.log(error); 
      } )
   }


async openModal() { 
  const modal = await this.modalCtrl.create( { 
    component: ImgPage,
    
  } ); 
  await modal.present();
}



}
