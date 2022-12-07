import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { DirectoryServiceService } from 'src/app/services/directory-service.service';
import { ImgPage } from './img/img.page';
import { TransactionPage } from './transaction/transaction.page';

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
startDate:any;
endDate:any;
reservationInfo:any;

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
      console.log('Property', this.propertyInfo)
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
    let x = Math.floor(Math.random()*1000000);
    let dataRe = {
      code: x,
      property: this.propertyid,
      user:this.userpk,
      start_date:this.startDate,
      end_date:this.endDate,
    }
    this.directoryService.MakeReservation(this.token, dataRe)
    .then( data => { 
      console.log(data);
      this.reservationInfo = data; 
      this.makeTransaction(this.propertyInfo, this.reservationInfo)
      this.modalTransaction();
      console.log(dataRe)
     } )
     .catch( error => { 
      console.log(error); 
      console.log(dataRe)
      } )
   }

   makeTransaction(propertyInfo:any, reservationInfo:any) {  
    let total = propertyInfo.price * 0.20 ;
    let dataTr = {
      reservation: reservationInfo.pk,
      total: total,
      status: 0,
      type_transaction: 0,
    }
    this.directoryService.MakeTransaction(this.token, dataTr)
    .then( data => { 
      console.log(data);
      console.log(dataTr)
     } )
     .catch( error => { 
      console.log(error); 
      console.log(dataTr)
      } )
   }


async openModal() { 
  const modal = await this.modalCtrl.create( { 
    component: ImgPage,
    
  } ); 
  await modal.present();
  
}

async modalTransaction() { 
  const modal = await this.modalCtrl.create( { 
    component: TransactionPage,
    
  } ); 
  await modal.present();
}


}
