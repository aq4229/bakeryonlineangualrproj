import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const d = new Date();
    d.setFullYear(d.getFullYear(), d.getMonth() + 2, 18);
    const e = new Date();
    // tslint:disable-next-line: whitespace
    const msec = d-e;
    const mins = Math.floor( msec / 1000);
    const hrs = Math.floor(mins / 60);
    const days = Math.floor(hrs / 24);
    for (let a = 0; a <= days; a++) {
        const f = new Date();
        // tslint:disable-next-line:quotemark
        // tslint:disable-next-line:no-shadowed-variable
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        const n = f.setFullYear(f.getFullYear(), f.getMonth(), f.getDate() + a);
// , f.getDay()
        console.log(days[f.getDay()], ',', months[f.getMonth()], f.getDate());


    }
  }

}
