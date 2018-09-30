import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  EventsListResolverService } from './events';

import { NavComponent } from './nav/nav.component';
import { ToastrService } from './common/toastr.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app-routes';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { ErrorsComponent } from './errors/errors.component';
import { RouteActivatorService } from './events/event-details/route-activator.service';
import { ConfirmationGuard } from './events/create-event/guards/confirmation.guard';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    ErrorsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService,
    ToastrService,
    RouteActivatorService,
    ConfirmationGuard,
    EventsListResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
