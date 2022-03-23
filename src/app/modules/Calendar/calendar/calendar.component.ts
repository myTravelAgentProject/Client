import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
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
  newevent:EventForCalendar;
  OrdersEvents:OrderDTO[]=[];
  month:number;
  year:number;
  ngOnInit(): void {
    this.month=3;
    this.year=2022;
    this.getMonthlyEvents();
  }
  addDays(days : number): Date{
    var futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + days);
    return futureDate;
  }
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    events: this.Events =
    [
      { title: 'event 1', start:new Date() },
       { title: 'michal 2', start: new Date() ,end:this.addDays(5) },
    // //   {title:'event 1',start:'2022-03-22'},
    // //   { title: 'event 2', start: '2022-04-02' },
    // //  {  title:'rachel shachor waldorf',   start: '2022-03-01',  end: '2022-03-22' }, 
    // //  {  title:'shoshy fraiman plaja',   start: '2022-03-01',  end: '2022-03-25' },
    // //  { title: 'event 2', start: '2022-04-02' },
    // //  { title: 'event 2', start: '2022-04-02' },
     ]
   };

  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
    this.Events=[ ]

  };
  getMonthlyEvents(){
    return this._calendarService.getEventsByMonth(this.year,this.month).subscribe(data=>{
      if(data){
        this.OrdersEvents=data;
        this.convertordersToEvenrs();
      }

    })

  }
  convertordersToEvenrs(){
    this.OrdersEvents.forEach(order=>{
    this.newevent.title="order.customerName order.hotelName";
    this.newevent.start= order.checkInDate;
    this.newevent.end=order.checkOutDate;
    this.Events.push(this.newevent);
    // let latest_date =this.datepipe.transform( order.checkOutDate, 'yyyy-MM-dd');
    })
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
