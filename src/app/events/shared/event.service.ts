import { Injectable } from '@angular/core';
declare var require: any;
@Injectable({
  providedIn: 'root'
})
export class EventService {

  data: any = require('../../../assets/dummyData.json');
  singleData: any = require('../../../assets/singleShow.json');
  constructor() { }
  getData(){ 
    return this.data;
  }
  getSingleData(id){
    console.log(id.toString());
    //id == name
    let searchExp = new RegExp(`/${id}/gi`);
    console.log(typeof searchExp); 
    let show = this.data.filter((s)=> {
      if(!s)
      return [];
      return s.show.name.toLowerCase().includes(id.toString().toLowerCase())
    });
    show =  show.length?show[0]['show']:[];
    show =  this.singleData.filter(s => s.name == show.name)[0];
    
    return show;
  }
}
