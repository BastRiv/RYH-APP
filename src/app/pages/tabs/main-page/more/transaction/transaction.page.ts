import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {

  constructor( private modalCtrl: ModalController, ) { }

  ngOnInit() {
  }

  dismiss(){ 
    this.modalCtrl.dismiss();
  }

}
