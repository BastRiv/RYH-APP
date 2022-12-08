import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DirectoryServiceService } from 'src/app/services/directory-service.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {

token:any;
properties:any;
userpk:any;
bookings:any;
idProperties:any;
propertiesInfo:any;

  constructor( private directoryService: DirectoryServiceService,
              private router: Router,
              private alertCtrl: AlertController ) { 

     this.token = JSON.parse(localStorage.getItem('userData')!).token;
     this.userpk = JSON.parse(localStorage.getItem('profile_data')!).pk;
 
    }

  ngOnInit() {
    this.getUserBookings();
  }

getUserBookings() { 
  this.directoryService.getUserBookings(this.token, this.userpk)
  .then( data=> { 
    this.bookings = data; 
    this.propertiesIds();
   } )
   .catch( error => { 
    console.log(error); 
    } )
 }


  propertiesIds(){
    let propertiesInfo: unknown[] =[];
    for(let i = 0; i < this.bookings.length; i++){ 
          this.directoryService.getOneProperty(this.token, this.bookings[i].property)
          .then( data => {
          
            propertiesInfo.push(data);
            this.propertiesInfo = propertiesInfo;
          } )
          .catch( error => {
            console.log(error);
          } )
      }
  }

async cancel(propertyInfo:any){
  let alert =  await this.alertCtrl.create({
        
      
    header: 'Cancelar reserva',
    message: '¿Está segur@?',
    buttons: [
      {
        text: 'No',
        role: 'cancel',
        handler: () => {
          console.log('Cancel');
        }
      }, {
        text: 'Si',
        handler: () => {
          
          // this.navCtrl.navigateBack('login').then(()=>{
          //   window.location.reload();
          // });
        }
      }
    ]
})
alert.present();
  }




 goMoreInfo(propertyInfo:any){
  this.router.navigate(['/main-page/more'], { queryParams: { propertyId: propertyInfo.pk  } });
  localStorage.setItem('propertyInfo', JSON.stringify(propertyInfo));
}

}
