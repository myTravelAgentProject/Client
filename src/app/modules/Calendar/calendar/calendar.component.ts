import { Component, OnInit } from '@angular/core';
// import { CalendarOptions } from '@fullcalendar/angular';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import { Calendar } from '@fullcalendar/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // calendarOptions: CalendarOptions = {
  //   initialView: 'dayGridMonth',
  //    weekends: true // initial value
  // };

  // toggleWeekends() {
  //   this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
  // };
}
