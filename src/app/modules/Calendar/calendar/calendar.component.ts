//import { FullCalendarModule } from '@fullcalendar/angular'; 
import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular';
import { Calendar } from '@fullcalendar/core';
//import dayGridPlugin from '@fullcalendar/daygrid';
import { Alert } from 'src/app/models/Alert.model';
import { EventForCalendar } from 'src/app/models/EventForCalendar.model';
import { OrderDTO } from 'src/app/models/OrderDTO.model';
import { CalendarService } from '../calendar.service';


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
  date1 = new Date();
  profit:number=0;
  @ViewChild('calendar') calendarComponent: FullCalendarComponent;
  // onDateClick(res: any) {
  //   alert('Clicked on date : ' + res.dateStr);
  // }
  ngOnInit(): void {
    this.month=this.date1.getMonth()+1;
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
    editable: true,
    selectMirror: true,
    dayMaxEvents: true,
    selectable:true,
    //dateClick: this.handleDateClick.bind(this),
    headerToolbar: {
        left: 'today,prev,next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek'              
    },   
    eventClick:function(arg){
      alert(JSON.stringify(arg.event))
      
    //  alert(arg.jsEvent.eventPhase)
      // alert(arg.event.start)
    },
    select: function(info) {
      alert('selected ' + info.startStr + ' to ' + info.endStr);
    },
    events: this.Events =
    [
      { title: 'event 1', start:new Date() },
       { title: 'michal 2', start: new Date() ,end:this.addDays(5),
       },
     ],
     eventColor: '#517ec0',
     themeSystem: 'bootstrap5',
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
     today: { // this overrides the prev button
      text: 'Today',
      click: () => {
      const calendarApi = this.calendarComponent.getApi();
      calendarApi.today();
      const currentDate = calendarApi.currentData.currentDate;
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth()+1;
      this.getMonthlyEvents(year, month);
      // const currentDate = calendarApi.currentData.currentDate;
      // if (currentDate) {
      //   const year = currentDate.getFullYear();
      //   const month = currentDate.getMonth();
      //     this.getMonthlyEvents(year, month);
      // }
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
       },
       
   }
  }
  handleDateClick(arg:any) {
    alert('date click! ' + arg.dateStr)
     alert(''+arg)
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
        this.calculateProfit ();
      }
    })

  }
  
  convertordersToEvenrs(){
   this.calendarComponent.getApi().removeAllEvents();
    this.OrdersEvents.forEach(order=>{
    this.newevent.start= new Date(order.checkInDate);
    this.newevent.title= `${order.customerName}-${order.hotelName}` //"order.customerName order.hotelName";
    this.newevent.end = new Date(order.checkOutDate) ;
    // this.Events.push(this.newevent);
    this.calendarComponent.getApi().addEvent(this.newevent);
    // let latest_date =this.datepipe.transform( order.checkOutDate, 'yyyy-MM-dd');
    });
    
  }
  calculateProfit(){
    this.profit=0;
    this.OrdersEvents.forEach(order=>{
      this.profit+=order.totalPrice-order.costPrice;
    })   
    //  alert(this.profit)
    }
  
  }