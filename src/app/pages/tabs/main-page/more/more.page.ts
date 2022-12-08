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
checkbox = false;
type_transfer = 0;
complete:any;
ida:any;
vuelta:any;
buttonReservation = false; 
buttonIda:any;
buttonVuelta:any;
turismo:any;

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
                this.propertyInfo = JSON.parse(localStorage.getItem('propertyInfo')!);
               }

  ngOnInit() {
  
    this.getPropertyInfo();
    this.getServicesProperty();
  }

  goBack() { 
    this.navCtrl.back();
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

   updateProperty(){
    let data={
      status:1,
      name: this.propertyInfo.name,
      description:this.propertyInfo.description,
      address:this.propertyInfo.address,
    }
    this.directoryService.updateProperty(this.token, data, this.propertyid )
    .then( data => { 
      console.log('Update',data); 
    })
    .catch( error=>{
      console.log(error);
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
      this.addTransferService(this.reservationInfo.pk);
      this.addTurismService(this.reservationInfo.pk)
      this.updateProperty();
      this.modalTransaction();
     } )
     .catch( error => { 
      console.log(error); 
      console.log(dataRe)
      } )
   }

   selectDateArrival($event:any){ 
    if ( $event.value != ''){
      this.buttonIda = true;
    }
   }

   selectDateLeave($event:any){ 
    if( this.buttonIda == true ){  
      this.buttonReservation = true;

    }
   }

   makeTransaction(propertyInfo:any, reservationInfo:any) { 

    let start_date = new Date(this.startDate).getTime();
    let end_date    = new Date(this.endDate).getTime(); 
    let diff = end_date - start_date;
    let price = diff/(1000*60*60*24) 
  
    let total = (propertyInfo.price * price) * 0.20 ;
    let dataTr = {
      reservation: reservationInfo.pk,
      total: total,
      status: 0,
      type_transaction: 0,
    }
    this.directoryService.MakeTransaction(this.token, dataTr)
    .then( data => { 
      localStorage.setItem('total', JSON.stringify(total))
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

completeTransport($event:any){
  if ( $event.detail.checked == true ) { 
    this.type_transfer = 3;
    console.log(this.type_transfer)
    this.ida = true; 
    this.vuelta = true; 
  }
  else if ( $event.detail.checked == false ) {
    this.type_transfer = 99;
    console.log(this.type_transfer)
  }

}

idaTransport($event:any){
  if ( $event.detail.checked == true && this.type_transfer != 3 )  { 
    this.type_transfer = 1;
    console.log(this.type_transfer)
  }

}

vueltaTransport($event:any){
  if ( $event.detail.checked == true && this.type_transfer != 3 )  { 
    this.type_transfer = 2;
    console.log(this.type_transfer)
  }
  

}


addTransferService(reservationInfo:any){ 
  if(this.type_transfer != 0){
    let data = {
      reservation: reservationInfo,
      type_transfer: this.type_transfer,
    }
    this.directoryService.addTransfer(this.token, data )
    .then( data =>{
      console.log(data)
    } )
    .catch( error =>{
      console.log(error)
    } )
  }

}

addTurismService(reservationInfo:any) {
  if(this.turismo == true) { 
    let data = { 
      reservation: reservationInfo
    }
    this.directoryService.addTurism(this.token, reservationInfo )
    .then( data => { 
      console.log(data);
    } )
    .catch( error => {
      console.log(error);
    } )
  }

}

turismoService($event:any){
  if ($event.detail.checked == true ){ 
    this.turismo = true; 
  }
}




}
