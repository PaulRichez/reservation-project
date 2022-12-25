import { Component, ViewChild } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import frLocale from '@fullcalendar/core/locales/fr';
import { FullCalendarComponent } from '@fullcalendar/angular/full-calendar.component';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  host: {class: 'fullComponent'},
})
export class CalendarComponent {
  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, timeGridPlugin],
    locale: frLocale,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    navLinks: true,
    // headerToolbar: false,
    navLinkDayClick: (date, jsEvent) => {
      console.log(date)
      this.calendarComponent.getApi().gotoDate(date);
      this.calendarComponent.getApi().changeView('timeGridDay');
    },
  }
  ngAfterViewInit(): void {
    setTimeout(() => { this.calendarComponent.getApi().updateSize() }, 550);
  }

}
