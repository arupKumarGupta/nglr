import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateEventComponent } from '../create-event.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationGuard implements CanDeactivate<CreateEventComponent> {
  canDeactivate(component: CreateEventComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean  {
    return window.confirm('Discard Changes?');
  }
  
}
