import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() {


   }

  ngOnInit(): void {
    // tslint:disable-next-line:only-arrow-functions
    $('.slider').mouseenter(function() {
      setTimeout(() => {
          $('.item_sub1').css({ top: '0px', left: '62px' });
          $('.item_sub2').css({ top: '-129px', left: '49.7%' });
          $('.item_sub3').css({ top: '0px', right: '0px' });
          $('.item_sub4').css({
              top: '50%',
              left: '0px',
              transform: 'translateY(-50%)'
          });
          $('.item_sub5').css({
              top: '50%',
              right: '0px',
              transform: 'translateY(-50%)'
          });
      }, 1000);

  });

  }

}
