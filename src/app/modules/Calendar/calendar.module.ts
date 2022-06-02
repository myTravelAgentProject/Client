import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
 import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugi
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid'; // a plugi
import listPlugin from '@fullcalendar/list'; // a plugi



FullCalendarModule.registerPlugins([ 
    dayGridPlugin,
    interactionPlugin,
    timeGridPlugin,
    listPlugin,
 
]);

@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule,  
    FullCalendarModule,
  ],
  exports:[CalendarComponent]
})
export class CalendarModule { }
