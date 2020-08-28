import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  // tslint:disable-next-line:align
  dates = [];
  timing = [
    {Morning: '10:00 AM'},
    {Morning: '10:30 AM'},
    {Morning: '11:00 AM'},
    {Morning: '11:30 AM'},
    {Afternoon: '12:00 PM'},
    {Afternoon: '12:30 PM'},
    {Afternoon: '1:00 PM'},
    {Afternoon: '1:30 PM'},
    {Afternoon: '2:00 PM'},
    {Afternoon: '2:30 PM'},
    {Afternoon: '3:00 PM'},
    {Afternoon: '3:30 PM'},
    {Afternoon: '4:00 PM'},
    {Afternoon: '4:30 PM'},
    {Afternoon: '5:00 PM'},
    {Afternoon: '5:30 PM'},
    {Evening: '6:00 PM'},
    {Evening: '6:30 PM'},
    {Evening: '7:00 PM'},
    {Evening: '7:30 PM'},
    {Evening: '8:00 PM'},
    {Evening: '8:30 PM'},
    {Evening: '9:00 PM'},
    {Evening: '9:30 PM'},
    {Evening: '10:00 PM'}
  ];
  // tslint:disable-next-line:variable-name
    // t_morning = [
    //   {shift: 'Morning'},
    //   {mode: 'AM'},
    //   {slot: [{
    //     time: '10:00'
    //   },
    //   {
    //     time: '10:30'
    //   },
    //   {
    //     time: '11:00'
    //   },
    //   {
    //     time: '11:30'
    //   }]}
    // ];



  constructor() { }
  ngOnInit(): void {
// tslint:disable-next-line:only-arrow-functions
    $(document).ready(function(){
    $('.nav-tabs li:first a').addClass('active');
    $('.tab-content div:first').addClass('show');
    $('.tab-content div:first').addClass('active');

      });
    getclientdata(){

      }
    // console.log(this.t_morning.shift);
    // tslint:disable-next-line:prefer-const
    let d = new Date();
    d.setFullYear(d.getFullYear(), d.getMonth() + 2, 18);
    // tslint:disable-next-line: prefer-const
    let e = new Date();
    // tslint:disable-next-line: whitespace
    // const msec = d-e;
    // tslint:disable-next-line:prefer-const
    let msec = d.valueOf() - e.valueOf();
    // tslint:disable-next-line:prefer-const
    let mins = Math.floor(msec / 60000);
    const hrs = Math.floor(mins / 60);
    const days = Math.floor(hrs / 24);

    for (let a = 0; a < days; a++) {
      const f = new Date();
      // tslint:disable-next-line:quotemark
      // tslint:disable-next-line:no-shadowed-variable
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

      f.setFullYear(f.getFullYear(), f.getMonth(), f.getDate() + a);
      // , f.getDay()
      // console.log( days[f.getDay()], ',', months[f.getMonth()], f.getDate());

      // tslint:disable-next-line:no-unused-expression
      // tslint:disable-next-line:quotemark
      // tslint:disable-next-line:max-line-length
      // $('.date').append('<li class="p-1 btn btn-block btn-outline-warning mb-2 text-dark py-2 carousel-item">' +  days[f.getDay()] + ',' + months[f.getMonth()] + ',' + f.getDate() + '</li>');
      // tslint:disable-next-line:quotemark
      this.dates.push({
        days: days[f.getDay()],
        date: f.getDate(),
        month: months[f.getMonth()],
        year: f.getFullYear()
      });
      console.log(this.dates);
    }
  }
}
  // days[f.getDay()] + ',' + months[f.getMonth()] + ',' + f.getDate()
