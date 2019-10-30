import {Component, OnInit} from '@angular/core';
import {LanguagesService} from "../../../services/languages/languages.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuOn: boolean;

  constructor(public ls: LanguagesService) {
  }

  ngOnInit() {
    this.menuOn = false;

  //   window.addEventListener('scroll', ()=>{
  //     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
  //       document.getElementById("menu-languages").style.width = "60px";
  //       console.log("shrinked")
  //     } else {
  //       document.getElementById("menu0languages").style.width = "90px";
  //     }
  //   }, true)
  }

  toggleMenu() {
    this.menuOn = !this.menuOn;
  }

  closeMenu() {
    this.menuOn=false;
  }




}
