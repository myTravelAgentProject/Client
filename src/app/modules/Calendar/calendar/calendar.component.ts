import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Alert } from 'src/app/models/Alert.model';
import { EventForCalendar } from 'src/app/models/EventForCalendar.model';
import { OrderDTO } from 'src/app/models/OrderDTO.model';
import { CalendarService } from '../calendar.service';
// import { DatePipe } from '@angular/common';

// document.addEventListener('DOMContentLoaded', function() {
//   let calendarEl: HTMLElement = document.getElementById('calendar')!;

//   let calendar = new Calendar(calendarEl, {
//     plugins: [ dayGridPlugin ],
//     // options here
//     // schedulerLicenseKey: 'XXX'
//     // dateClick: this.handleDateClick.bind(this), // bind is important!
//     events: [
//       { title: 'event 1', date: '2022-04-01' },
//       { title: 'event 2', date: '2022-04-02' }
//     ]
//   });
//   // calendar.addEvent()
//   calendar.render();
// });
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor(private _calendarService:CalendarService) { }
  Events: EventForCalendar[] = [];
  newevent:EventForCalendar = {};
  OrdersEvents:OrderDTO[]=[];
  month:number;
  year:number;
  @ViewChild('calendar') calendarComponent: FullCalendarComponent;
  ngOnInit(): void {
    this.month=3;
    this.year=2022;
    this.getMonthlyEvents(this.year, this.month);
  }
  addDays(days : number): Date{
    var futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + days);
    return futureDate;
  }
  calendarOptions: CalendarOptions = {
    nextDayThreshold: '23:43:00',
    initialView: 'dayGridMonth',
    headerToolbar: {
        left: 'today prev,next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek'                
    },
    eventClick:function(arg){
      alert(JSON.stringify(arg.event))
      alert(arg.event.title)
      alert(arg.event.start)
    },
    events: this.Events =
    [
      { title: 'event 1', start:new Date() },
       { title: 'michal 2', start: new Date() ,end:this.addDays(5) },
    
     ],
     customButtons: {
      prev: { // this overrides the prev button
        text: 'PREV',
        click: () => {
        const calendarApi = this.calendarComponent.getApi();
        calendarApi.prev();
        const currentDate = calendarApi.currentData.currentDate;
        if (currentDate) {
          const year = currentDate.getFullYear();
          const month = currentDate.getMonth()+1;
            this.getMonthlyEvents(year, month);
        }
      }
      },
      next: { // this overrides the next button
        text: 'NEXT',
        click: () => {
        const calendarApi = this.calendarComponent.getApi();
        calendarApi.next();
        const currentDate = calendarApi.currentData.currentDate;
        if (currentDate) {
          const year = currentDate.getFullYear();
          const month = currentDate.getMonth()+1;
          this.getMonthlyEvents(year, month);
        }
       }
     },
      dayGridMonth: { // this overrides the month button
         text: 'Month',
         click: () => {
           const calendarApi = this.calendarComponent.getApi();
           calendarApi.changeView('dayGridMonth');
         }
       },
       timeGridWeek: { // this overrides the week button
         text: 'Week',
         click: () => {
           const calendarApi = this.calendarComponent.getApi();
           calendarApi.changeView('dayGridWeek');
         }
       },
       timeGridDay: { // this overrides the day button
         text: 'Day',
         click: () => {
           const calendarApi = this.calendarComponent.getApi();
           calendarApi.changeView('dayGridMonth');
         }
       }
   }
  }

  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
    this.Events=[ ]

  };
  getMonthlyEvents(year: number, month: number){
    return this._calendarService.getEventsByMonth(year, month).subscribe(data=>{
      if(data){
        this.OrdersEvents=data;
        this.convertordersToEvenrs();
      }

    })

  }
  convertordersToEvenrs(){
    this.OrdersEvents.forEach(order=>{
    this.newevent.start= new Date(order.checkInDate);
    this.newevent.title= `${order.customerName}-${order.hotelName}` //"order.customerName order.hotelName";
    this.newevent.end = new Date(order.checkOutDate) ;
    // this.Events.push(this.newevent);
    this.calendarComponent.getApi().addEvent(this.newevent);
    // let latest_date =this.datepipe.transform( order.checkOutDate, 'yyyy-MM-dd');
    });
 
  }

  
}



//   // handleDateClick(arg) {
//   //   alert('date click! ' + arg.dateStr)
//   // }
  
// // }
// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { CalendarOptions } from '@fullcalendar/angular';
// import { DatePipe } from '@angular/common';
// @Component({  
//   selector: 'app-calendar',
//   templateUrl: './calendar.component.html',
//   styleUrls: ['./calendar.component.css']
// })
// export class CalendarComponent implements OnInit {

//   Events: any[] = []
//   calendarOptions: CalendarOptions = {
//     headerToolbar: {
//       left: 'prev,next today',
//       center: 'title',
//       right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
//     },
//     initialView: 'dayGridMonth',
//     weekends: true,
//     editable: true,
//     selectable: true,
//     selectMirror: true,
//     dayMaxEvents: true
//   };
//   constructor(private httpClient: HttpClient) {}
//   onDateClick(res: any) {
//     alert('Clicked on date : ' + res.dateStr);
//   }
//   ngOnInit() {
//    setTimeout(() => {
//       this.calendarOptions = {
//         initialView: 'dayGridMonth',
//         // dateClick: this.onDateClick.bind(this),
//         events: this.Events,
//       };
//     }, 2500);
//   }

  // Events: any[] = [{ title: 'event 2', date: '2022-04-02' },
  // { title: 'event 3', date: '2022-03-13' }];
  // calendarOptions: CalendarOptions = {
  //   headerToolbar: {
  //     left: 'prev,next today',
  //     center: 'title',
  //     right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
  //   },
  //   initialView: 'dayGridMonth',
  //   weekends: true,
  //   editable: true,
  //   selectable: true,
  //   selectMirror: true,
  //   dayMaxEvents: true
  // };
  // constructor(private httpClient: HttpClient) {}
  // onDateClick(res: any) {
  //   alert('Clicked on date : ' + res.dateStr);
  // }
  // ngOnInit() {
    
  //   setTimeout(() => {
  //     this.calendarOptions = {
  //       initialView: 'dayGridMonth',
  //       // dateClick: this.onDateClick.bind(this),
  //       events: this.Events,
  //     };
  //   }, 2500);
  // }
  
//   toggleWeekends() {
//     this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
//     this.Events=[
//          { title: 'event 2', date: '2022-04-02' }]
      
//   };

// }
