import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuOn: boolean;

  constructor() {
  }

  ngOnInit() {
    this.menuOn = false;
  }

  toggleMenu() {
    this.menuOn = !this.menuOn;
  }

  closeMenu() {
    this.menuOn=false;
  }
}
