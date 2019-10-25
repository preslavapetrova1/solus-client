import { Component, OnInit } from '@angular/core';
import { BOUNCE_IN, BOUNCE_OUT } from 'angular-bounce';
import {transition, trigger, useAnimation} from "@angular/animations";

@Component({
  selector: 'app-scroll-up-button',
  templateUrl: './scroll-up-button.component.html',
  styleUrls: ['./scroll-up-button.component.scss'],
  animations: [
    trigger('heroState', [
      transition('inactive => active', [
        useAnimation(BOUNCE_IN)
      ]),
      transition('active => inactive', [
        useAnimation(BOUNCE_OUT)
      ])
      ])
    ]
})
export class ScrollUpButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
