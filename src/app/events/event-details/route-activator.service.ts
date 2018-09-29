import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { EventService } from '../shared/event.service';

@Injectable({
  providedIn: 'root'
})
export class RouteActivatorService implements CanActivate {

  constructor(private eventService: EventService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot){
    let exists = !!this.eventService.getSingleData(route.params['id']);
    console.log(exists)   ;    
    if(!exists)
      this.router.navigate(['/404'])
    return exists;
  }
}
