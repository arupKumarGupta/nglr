import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ToastrService } from '../../common/toastr.service';
@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  data: any[];

  constructor(private eventService : EventService,private toastr: ToastrService) { 
   
  }

  ngOnInit() {
    // console.log(this.data);
    this.data = this.eventService.getData();
  }

  getEventName(eventName){
    this.toastr.success(eventName,eventName);
  }

}
