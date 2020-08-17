import { Component, OnInit } from '@angular/core';
import {ServiceApiService} from './service-api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data:any;
  data1:any;
  data2:any;
  data3:any;
  data4:any;
  title = 'GetData';
  constructor(private service:ServiceApiService){} 
  ngOnInit(){
    this.getDetails();
    this.getDetails1();
    this.getDetails2();
    this.getDetails3();
    this.getDetails4();
  }
  getDetails(){
    this.service.getApi().subscribe(res=>{
      console.log(res);
      this.data =res;
    })
  }
  getDetails1(){
    this.service.getApi1().subscribe(res1=>{
      console.log(res1);
      this.data1=res1;
    })
  }
  getDetails2(){
    this.service.getApi2().subscribe(res2=>{
      console.log(res2);
      this.data2 =res2;
    })
  }
  getDetails3(){
    this.service.getApi3().subscribe(res3=>{
      console.log(res3);
      this.data3 = res3;
    })
  }
  getDetails4(){
    this.service.getApi4().subscribe(res4=>{
      console.log(res4);
      this.data4 = res4;
    })
  }
}