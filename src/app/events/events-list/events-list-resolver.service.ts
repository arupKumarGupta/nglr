import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EventService } from '../shared/event.service';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EventsListResolverService implements Resolve<any>{
  resolve(route:ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.eventService.getData().pipe(map(data=>data));
  
  }

  constructor(private eventService: EventService) { }
}
