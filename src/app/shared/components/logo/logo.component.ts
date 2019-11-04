import {Component, OnInit} from '@angular/core';
import {element} from "protractor";

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})

export class LogoComponent implements OnInit {

  constructor() {

  }


  ngOnInit() {

    window.addEventListener('scroll', ()=>{
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("logo-container").style.width = "8%";
      } else {
        document.getElementById("logo-container").style.width = "15%";
      }
    }, true)

  }
}
