import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { id } from 'date-fns/locale';
import moment from 'moment';
import { Moment } from 'moment';

@Component({
  selector: 'mx-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  @Output() dateSelected = new EventEmitter<any>();

  currentDate: any;
  month: string;
  year: number;
  day: string;
  checkedDate: any;
  allMonths: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];

  weekDay = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  days = [];
  selectedDate: any;
  monthView: boolean = false;
  activeTab: string = 'tab1';
  current: moment.Moment;

  constructor() {
    var date=new Date();
    this.current = moment(`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`, "DD/MM/YYYY");
  }

  ngOnInit(): void {
    this.parseDateAndRender(this.current);;
  }
  ngOnChanges(): void {
    this.parseDateAndRender(this.current);
  }

  parseDateAndRender(momentdate) {
    this.currentDate = momentdate
    this.month = this.currentDate.format('MMMM');
    this.year = this.currentDate.format('YYYY');
    this.selectedDate = this.currentDate;
    this.renderCalendar();
  }

  renderCalendar() {
    const date = this.currentDate;
    const startOfMonth = date.clone().startOf('month');
    const firstDayOfWeek = startOfMonth.clone().startOf('week');
    const endOfMonth = date.clone().endOf('month');
    const numberOfDays = Math.ceil(endOfMonth.diff(startOfMonth, 'hours') / 24);
    let numberOfWeeks = Math.ceil(numberOfDays / 7);

    var startDate = new Date(startOfMonth);
    var weekDayName = startDate.getDay();
    if ((numberOfDays == 31 && weekDayName > 4) ||
      (numberOfDays == 30 && weekDayName > 5) ||
      (numberOfDays == 28 && weekDayName > 0)) {
      numberOfWeeks++;
    }

    let week = 0;
    this.days = [];
    for (let i = 0; i < numberOfWeeks; i++) {
      this.days[week] = [];
      for (let j = 0; j < 7; j++) {
        this.days[week][j] = '';
      }
      week++;
    }

    for (let i = 0; i < numberOfDays; i++) {
      const cDay = startOfMonth.clone().add(i, 'days');
      const offset = startOfMonth.diff(firstDayOfWeek, 'days') - 1;
      const w = Math.floor((cDay.date() + offset) / 7);

      if (w < numberOfWeeks) {
        const day = cDay.day();
        this.days[w][day] = cDay;
      }
    }
    this.emitSelectedDate(this.selectedDate.date());
  }

  checkDate(day) {
    if (day !== '') {
      const now = moment();
      const diff = Math.floor(day.diff(now, 'minutes') / 1440);
      if (this.selectedDate && day.date() === this.selectedDate.date()) {
        return {
          selected: true
        };
      } else if (diff < -1) {
        return {
          disabled: true
        };
      }  else if (diff == -1 ) {
        return {
          current: true
        };
      }
      else {
        return {
          simple: true
        };
      }
    
    }
  }

  selectDay(day: Moment) {
    const now = this.current;
    if (day.isAfter(now) || (now.format("DD-MM-yyyy") == day.format("DD-MM-yyyy"))) {
      this.selectedDate = day;
      this.emitSelectedDate(day.date());
    } else {
      return
    }
  }

  emitSelectedDate(date) {
    const monthIndex = this.allMonths.indexOf(this.month);
    const selectedDate: Date = new Date();
    selectedDate.setDate(date);
    selectedDate.setMonth(monthIndex);
    selectedDate.setFullYear(Number(this.year));
    this.dateSelected.emit(Number(selectedDate));
  }
  nextMonth() {
    this.currentDate.add(1, 'months');
    this.month = this.currentDate.format('MMMM');
    this.year = this.currentDate.format('YYYY');
    this.renderCalendar();
  }

  prevMonth() {
    this.currentDate.subtract(1, 'months');
    this.month = this.currentDate.format('MMMM');
    this.year = this.currentDate.format('YYYY');
    this.renderCalendar();
  }
}
