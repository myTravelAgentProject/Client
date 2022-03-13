// import { Component, OnInit } from '@angular/core';
// import { CalendarOptions } from '@fullcalendar/angular';
// import { Calendar } from '@fullcalendar/core';
// import dayGridPlugin from '@fullcalendar/daygrid';

// // document.addEventListener('DOMContentLoaded', function() {
// //   let calendarEl: HTMLElement = document.getElementById('calendar')!;

// //   let calendar = new Calendar(calendarEl, {
// //     plugins: [ dayGridPlugin ],
// //     // options here
// //     // schedulerLicenseKey: 'XXX'
// //     // dateClick: this.handleDateClick.bind(this), // bind is important!
// //     events: [
// //       { title: 'event 1', date: '2022-04-01' },
// //       { title: 'event 2', date: '2022-04-02' }
// //     ]
// //   });
// //   // calendar.addEvent()
// //   calendar.render();
// // });
// @Component({
//   selector: 'app-calendar',
//   templateUrl: './calendar.component.html',
//   styleUrls: ['./calendar.component.css']
// })
// export class CalendarComponent implements OnInit {

//   constructor() { }
//   Events: any[] = [];
//   ngOnInit(): void {
//   }
//   calendarOptions: CalendarOptions = {
//     initialView: 'dayGridMonth',
//     events: this.Events
//     // [
//     //   { title: 'event 1', date: '2022-04-01' },
//     //   { title: 'event 2', date: '2022-04-02' }]
//    };

//   toggleWeekends() {
//     this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
//     this.Events=[
//          new Event('event 1',new EventInit()),
//          { title: 'event 2', date: '2022-04-02' }]
      
//   };



//   // handleDateClick(arg) {
//   //   alert('date click! ' + arg.dateStr)
//   // }
  
// }
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CalendarOptions } from '@fullcalendar/angular';
import { DatePipe } from '@angular/common';
@Component({  
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  Events: any[] = [{ title: 'event 2', date: '2022-04-02' },
  { title: 'event 3', date: '2022-03-13' }];
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true
  };
  constructor(private httpClient: HttpClient) {}
  onDateClick(res: any) {
    alert('Clicked on date : ' + res.dateStr);
  }
  ngOnInit() {
    
    setTimeout(() => {
      this.calendarOptions = {
        initialView: 'dayGridMonth',
        // dateClick: this.onDateClick.bind(this),
        events: this.Events,
      };
    }, 2500);
  }
  
  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
    this.Events=[
         { title: 'event 2', date: '2022-04-02' }]
      
  };

}
