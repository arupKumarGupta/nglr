import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  @Input() event: any;
  @Output() emitter = new EventEmitter();
  constructor() { }

  ngOnInit() {
    // console.log(this.event);
  }
  logFoo() {

  }
  getSticker() {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let now = new Date();
    let today = now.getDay();
    let tomorrow = (today + 1) % 7;
    let yesterday = (today + 6) % 7;
    let eventDay = this.event.show.schedule.days[0];
    let cssClass = '';
    switch (eventDay) {
      case days[today]:
        cssClass = 'Today';
        break;
      case days[yesterday]:
        cssClass = 'Yesterday';
        break;
      case days[tomorrow]:
        cssClass = 'Tomorrow';
        break;
      default:
        cssClass = 'day-'+eventDay;
    }
    return cssClass;
  }
  showDay(day:String){
    if(day.includes("day-")){
      return day.substring(4);
    }
    return day;
  }
}
