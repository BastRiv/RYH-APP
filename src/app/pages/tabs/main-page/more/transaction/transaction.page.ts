import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {

total:any;
  constructor( private modalCtrl: ModalController,
               private navCtrl:NavController,
               private router: Router ) {

            this.total = localStorage.getItem('total');
   }

  ngOnInit() {
  }

  dismiss(){ 
    this.modalCtrl.dismiss();
    this.router.navigateByUrl('tabs/main-page')
    .then(()=>{
      window.location.reload();
    });

  }

}
