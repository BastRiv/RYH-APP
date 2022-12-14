import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { environment } from './../../environments/environment';

let apiUrl = environment.url;

@Injectable({
  providedIn: 'root'
})
export class DirectoryServiceService {

  constructor(public http: HttpClient) { }




  
  
  updateProperty(token:any, data:any, pk:any) {
    return new Promise((resolve, reject)=>{
    let headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Token '+ token});
    this.http.put(apiUrl+'property/' + pk , data, {headers: headers})
    .subscribe(res => {
        resolve(res);
    }, (err) => {
        reject(err);
      });
    });
  }
  
  
  getProperties(token:any) {
    return new Promise((resolve, reject)=>{
    let headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Token '+ token});
    this.http.get(apiUrl+'property/',{headers: headers})
    .subscribe(res => {
        resolve(res);
    }, (err) => {
        reject(err);
      });
    });
  }

  getOneProperty(token:any, pk:any) {
    return new Promise((resolve, reject)=>{
    let headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Token '+ token});
    this.http.get(apiUrl+'property/' + pk ,{headers: headers})
    .subscribe(res => {
        resolve(res);
    }, (err) => {
        reject(err);
      });
    });
  }


  getPropertyInfo(token:any,pk:any){
    return new Promise((resolve, reject)=>{
      let headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Token ' + token});
      this.http.get(apiUrl + 'property/' + pk, {headers: headers})
      .subscribe(res=>{
        resolve(res);
      },(err)=>{
        reject(err);
      });
    });
  }

  getUserBookings(token:any,pk:any){
    return new Promise((resolve, reject)=>{
      let headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Token ' + token});
      this.http.get(apiUrl + 'property/reservation/?user=' + pk, {headers: headers})
      .subscribe(res=>{
        resolve(res);
      },(err)=>{
        reject(err);
      });
    });
  }


  getOneServicesProperty(token:any, pk:any){
    return new Promise((resolve, reject)=>{
      let headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Token ' + token});
      this.http.get(apiUrl + 'property/service/read/?property='+ pk,  {headers: headers})
      .subscribe(res=>{
        resolve(res);
      },(err)=>{
        reject(err);
      });
    });
  }

  MakeReservation(token:any, data:any){
    return new Promise ((resolve,reject)=>{
        let headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Token ' + token});
        this.http.post(apiUrl+'property/reservation/', data, {headers:headers})
        .subscribe(res=>{
          resolve(res);
        },(err)=>{
          reject(err);
        });
      });
    }

    MakeTransaction(token:any, data:any){
      return new Promise ((resolve,reject)=>{
          let headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Token ' + token});
          this.http.post(apiUrl+'property/reservation/transaction/', data, {headers:headers})
          .subscribe(res=>{
            resolve(res);
          },(err)=>{
            reject(err);
          });
        });
      }

      addTransfer(token:any, data:any){
        return new Promise ((resolve,reject)=>{
            let headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Token ' + token});
            this.http.post(apiUrl+'property/reservation/service/transfer/', data, {headers:headers})
            .subscribe(res=>{
              resolve(res);
            },(err)=>{
              reject(err);
            });
          });
        }

        addTurism(token:any, data:any){
          return new Promise ((resolve,reject)=>{
              let headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Token ' + token});
              this.http.post(apiUrl+'property/reservation/service/tour/', data, {headers:headers})
              .subscribe(res=>{
                resolve(res);
              },(err)=>{
                reject(err);
              });
            });
          }
  




}


