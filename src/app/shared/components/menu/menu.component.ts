import {Component, OnInit} from '@angular/core';
import {LanguagesService} from "../../../services/languages/languages.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuOn: boolean;
  X_URL: string;
  SANDWICH_URL: string;

  constructor(public ls: LanguagesService) {
    this.X_URL = 'assets/images/menu/close_icon.png';
    this.SANDWICH_URL = 'assets/images/menu/menu-button.png';
  }

  ngOnInit() {
    this.menuOn = false;

  }

  toggleMenu() {
    this.menuOn = !this.menuOn;
  }

  closeMenu() {
    this.menuOn = false;
  }
}
