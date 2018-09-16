import { Component, OnInit } from '@angular/core';
declare var require:any ;

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  data: any = require('../../../assets/dummyData.json');
  constructor() { }

  ngOnInit() {
    // console.log(this.data);
    
  }

}
