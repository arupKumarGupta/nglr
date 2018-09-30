import { Routes } from '@angular/router';
import { EventsListComponent } from "./events/events-list/events-list.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { CreateEventComponent } from './events/create-event/create-event.component';
import { ErrorsComponent } from './errors/errors.component';
import { RouteActivatorService } from './events/event-details/route-activator.service';
import { ConfirmationGuard } from './events/create-event/guards/confirmation.guard';

export const appRoutes: Routes = [
    { path: 'events', component: EventsListComponent },
    { path: 'events/new', component: CreateEventComponent, canDeactivate:[ConfirmationGuard] },
    { path: 'events/:id', component: EventDetailsComponent,canActivate:[RouteActivatorService] },
    { path: '404', component: ErrorsComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    
];