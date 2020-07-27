import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-wellcome',
  templateUrl: './wellcome.component.html',
  styleUrls: ['./wellcome.component.scss']
})
export class WellcomeComponent implements OnInit {

  constructor() {
   }

  ngOnInit(): void {

      $('.menu-toggler').click(function() {

      $(this).toggleClass('active');
      $('.navbar-menu').toggleClass('active');
  });
  // alert('jhgjhg');
  // rs - layer - wrap: nth - child(2)


      // tslint:disable-next-line:only-arrow-functions
      $('.sec').mousemove( function(event) {
      const left = event.pageX / 45 + 'px';
      const top = event.pageY / 45 + 'px';
          // let topp = event.pageX / 25 + 'px';
          // let topbutton = event.pageX / 10 + 'px';
          // $('.seco').css('transform', 'translateX(' + left + ')');
          // $('.seco>h1').css('transform', 'translate(' + toph1 + ' , ' + tophp + ')');
          // $('.seco>p').css('transform', 'translateX(' + topp + ')');
      $(' .seco>h1, .seco>p, .seco>button').css({ transform: 'translate(' + left + ' , ' + top + ')' });
          // var msg = 'Handler for .mousemove() called at ';
          // msg += event.pageX + ', ' + event.pageY;
          // $('#log').append('<div>' + msg + '</div>');
          // $('.seco>p').css('transform', 'translate(event.pageX / 70, event.pageY / 70');
          // console.log(left + ', ' + top);
      });
    // tslint:disable-next-line:only-arrow-functions
      $('#sec').mouseleave(function() {
      $('.seco>h1, .seco>p , .seco>button').css({transform: 'translate(0px , 0px)'});
      // $(".seco>h1").css("transform", "translateX(0)");
      // $(".seco>p").css("transform", "translateX(0)");
      // $(".seco>button").css("transform", "translateX(0)");
      // $(".seco").css("background", "transparent");
  });

  }


}
