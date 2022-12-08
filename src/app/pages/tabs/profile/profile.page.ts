import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

profile_data:any;

  constructor() { 

    this.profile_data = JSON.parse(localStorage.getItem('profile_data')!);
  }

  ngOnInit() {
  }

}
