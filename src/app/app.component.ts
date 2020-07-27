import { Component, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'angularproj';
  constructor(){
    $(window).scroll(function(event) {
      if (this.scrollY > 20) {
          $('.navbar1').addClass('sticky');
          const scroll = scrollY ;
          $('.progress-bar').css({ width: +scroll + '%' });
      } else {
          $('.navbar1').removeClass('sticky');
      }
  });
  }
}
