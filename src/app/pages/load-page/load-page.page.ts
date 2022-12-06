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
  profile_data:any;
  token:any;


  constructor(private navCtrl: NavController,
              private authService: AuthorizationServiceService) { 
    setInterval(()=>{
      this.progress += .02;
    }, 100)
    setTimeout(()=>{
      this.navCtrl.navigateForward('tabs/main-page')
    }, 6000)
    
      this.token = JSON.parse(localStorage.getItem('userData')!).token; 
  }

  ngOnInit() {
    this.getData();
  }

  getData() { 
    this.authService.getData(this.token)
    .then( data => { 
      this.profile_data = data;
      console.log(this.profile_data); 
      localStorage.setItem('profile_data', JSON.stringify(this.profile_data));
     } )
     .catch( error => {
      console.log(error);
     } )
  }

}
