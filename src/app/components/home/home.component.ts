import {Component, OnInit} from '@angular/core';
import {LanguagesService} from "../../services/languages/languages.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(public ls: LanguagesService) {
  }
}
