import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {
  
  url: string = 'https://jsonplaceholder.typicode.com/users';
  url1:string = 'https://jsonplaceholder.typicode.com/todos';
  url2:string = 'https://jsonplaceholder.typicode.com/photos';
  url3:string = 'https://jsonplaceholder.typicode.com/albums';
  url4:string = 'https://api.covid19india.org/v2/state_district_wise.json';
  constructor(private http:HttpClient) { }
  getApi(){
    return this.http.get(this.url);
  }

  getApi1(){
    return this.http.get(this.url1);
  }
  getApi2(){
    return this.http.get(this.url2);
  }
 getApi3(){
   return this.http.get(this.url3);
 }
 getApi4(){
   return this.http.get(this.url4);
 }
}