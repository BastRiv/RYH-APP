import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor( private directoryService: DirectoryServiceService,
              private router: Router ) { 

     this.token = JSON.parse(localStorage.getItem('userData')!).token;
     this.userpk = JSON.parse(localStorage.getItem('profile_data')!).pk;
     console.log(this.token)
 
    }

  ngOnInit() {
    this.getUserBookings();
  }

getUserBookings() { 
  this.directoryService.getUserBookings(this.token, this.userpk)
  .then( data=> { 
    this.bookings = data; 
    console.log(this.bookings)
   } )
   .catch( error => { 
    console.log(error); 
    } )
 }


  goMoreInfo(propertyid:any){
    this.router.navigate(['/main-page/more'], { queryParams: { propertyId: propertyid  } });
    localStorage.setItem('propertyid', propertyid)
    console.log('ID', propertyid)
  }

}
