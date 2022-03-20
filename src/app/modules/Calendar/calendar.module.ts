import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
 import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugi
import interactionPlugin from '@fullcalendar/interaction';
FullCalendarModule.registerPlugins([interactionPlugin, dayGridPlugin]);
// import resourceTimelinePlugin from '@fullcalendar/resource-timeline'; 
//  import interactionPlugin from '@fullcalendar/interaction'; // a plugin!

 

FullCalendarModule.registerPlugins([ 
  interactionPlugin,
  dayGridPlugin
]);

@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule  
    ,FullCalendarModule
  ],
  exports:[CalendarComponent]
})
export class CalendarModule { }
