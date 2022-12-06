import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { environment } from './../../environments/environment';

let apiUrl = environment.url;

@Injectable({
  providedIn: 'root'
})
export class AuthorizationServiceService {

  constructor(public http: HttpClient) { }


postData(credentials:any) {
  return new Promise((resolve, reject) => {
    let headers = new HttpHeaders({'Content-Type': 'application/json'});

    this.http.post(apiUrl + "auth/", JSON.stringify(credentials), {headers: headers})
    .subscribe(res => {
      resolve(res);
    }, (err) => {
      reject(err);
    });
  });

}
createUser(data:any) {
  return new Promise((resolve, reject) => {
    let headers = new HttpHeaders({'Content-Type': 'application/json'});

    this.http.post(apiUrl + "register/", JSON.stringify(data), {headers: headers})
    .subscribe(res => {
      resolve(res);
    }, (err) => {
      reject(err);
    });
  });

}

getData(token:any){
  return new Promise((resolve,reject)=>{
    let headers = new HttpHeaders({'Content-Type':'application/json', 'Authorization': 'Token ' + token});

    this.http.get(apiUrl + "profile/", {headers:headers})
    .subscribe(res =>{
      resolve(res);
    }, (err)=>{
      reject(err);
    });
  });
}

}


