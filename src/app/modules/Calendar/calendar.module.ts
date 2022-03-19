import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
 import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
// import resourceTimelinePlugin from '@fullcalendar/resource-timeline'; 
//  import interactionPlugin from '@fullcalendar/interaction'; // a plugin!

 

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  //  resourceTimelinePlugin,
  //  interactionPlugin
]);

@NgModule({
  declarations: [],
  imports: [
    CommonModule  
    ,FullCalendarModule
  ],
  exports:[]
})
export class CalendarModule { }
