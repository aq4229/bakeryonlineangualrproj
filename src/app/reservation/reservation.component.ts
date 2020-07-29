import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  constructor() {
   }

  ngOnInit(): void {



    // $('.responsive').slick({
    //   dots: true,
    //   infinite: false,
    //   speed: 300,
    //   slidesToShow: 4,
    //   slidesToScroll: 4,
    //   responsive: [
    //     {
    //       breakpoint: 1024,
    //       settings: {
    //         slidesToShow: 3,
    //         slidesToScroll: 3,
    //         infinite: true,
    //         dots: true
    //       }
    //     },
    //     {
    //       breakpoint: 600,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 2
    //       }
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1
    //       }
    //     }
    //     // You can unslick at a given breakpoint now by adding:
    //     // settings: "unslick"
    //     // instead of a settings object
    //   ]
    // });
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
    let mins = Math.floor( msec / 60000);
    const hrs = Math.floor(mins / 60);
    const days = Math.floor(hrs / 24);
    console.log(days);
    for (let a = 0; a < days; a++) {
            const f = new Date();
            // tslint:disable-next-line:quotemark
            // tslint:disable-next-line:no-shadowed-variable
            const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

            const n = f.setFullYear(f.getFullYear(), f.getMonth(), f.getDate() + a);
    // , f.getDay()
            console.log( days[f.getDay()], ',', months[f.getMonth()], f.getDate());

            // tslint:disable-next-line:no-unused-expression
            // tslint:disable-next-line:quotemark
            $('.date').append('<li class="btn-time-selected p-1 btn btn-block btn-outline-warning mb-2 white-space-normal text-dark py-2 body-textsize-sm col-3">' +  days[f.getDay()] + ',' + months[f.getMonth()] + ',' + f.getDate() + '</li>');
        }

  }

}

// document.querySelector("#app-platform > header > div.progress-bar-container")
