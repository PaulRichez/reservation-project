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
  host: { class: 'fullComponent' },
})
export class CalendarComponent {
  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;
  private subSeen: any;
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, timeGridPlugin],
    locale: frLocale,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    navLinks: true,
    headerToolbar: false,
    navLinkDayClick: (date, jsEvent) => {
      console.log(date)
      this.calendarComponent.getApi().gotoDate(date);
      this.calendarComponent.getApi().changeView('timeGridDay');
    },
  }
  stateOptions = [
    { icon: 'fa-solid fa-calendar', value: 'dayGridMonth' },
    { icon: 'fa-solid fa-calendar-day', value: 'timeGridDay' },
    { icon: 'fa-solid fa-calendar-week', value: 'dayGridDay' },
  ];
  viewInit: boolean = false;
  ngAfterViewInit(): void {
    this.subSeen = setTimeout(() => { this.calendarComponent.getApi().updateSize(), this.viewInit = true }, 550);
  }

  ngOnDestroy(): void {
    clearTimeout(this.subSeen);
  }

  moveCalendar(state: string) {
    if (state === 'prev') {
      this.calendarComponent.getApi().prev();
    } else if (state === 'next') {
      this.calendarComponent.getApi().next();
    } else if (state === 'today') {
      this.calendarComponent.getApi().today();
    }
  }

  changeViewCalendar(view: string) {
    this.calendarComponent.getApi().changeView(view);
  }

}
