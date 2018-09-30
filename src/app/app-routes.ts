import { Routes } from '@angular/router';
import { EventsListComponent,
    CreateEventComponent,
    EventDetailsComponent,
    EventsListResolverService } from './events';
import { ErrorsComponent } from './errors/errors.component';
import { RouteActivatorService } from './events/event-details/route-activator.service';
import { ConfirmationGuard } from './events/create-event/guards/confirmation.guard';

export const appRoutes: Routes = [
    { path: 'events', component: EventsListComponent ,resolve:{events:EventsListResolverService} },
    { path: 'events/new', component: CreateEventComponent, canDeactivate:[ConfirmationGuard] },
    { path: 'events/:id', component: EventDetailsComponent,canActivate:[RouteActivatorService] },
    { path: '404', component: ErrorsComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'users', loadChildren:'./users/users.module#UsersModule' },

    
];