import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DirectoryServiceService } from 'src/app/services/directory-service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
})
export class MainPagePage implements OnInit {

token:any;
properties:any;

  constructor( private navCtrl: NavController,
               private directoryService: DirectoryServiceService,
               private router: Router ) { 

                this.token = JSON.parse(localStorage.getItem('userData')!).token;
                console.log(this.token)
            
               }

  ngOnInit() {
    this.getProperties();
  }

  getProperties(){
    this.directoryService.getProperties(this.token).
    then(data => { 
        this.properties = data;
        console.log(this.properties); 
       })
       .catch( error=> { 
        console.log(error);
        } )
  }


  goMoreInfo(propertyid:any){
    this.router.navigate(['/main-page/more'], { queryParams: { propertyId: propertyid  } });
    localStorage.setItem('propertyid', propertyid)
    console.log('ID', propertyid)
  }

}
