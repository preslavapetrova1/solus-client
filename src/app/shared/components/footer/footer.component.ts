import { Component, OnInit } from '@angular/core';
import {LanguagesService} from "../../../services/languages/languages.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public ls: LanguagesService) { }

  ngOnInit() {
  }

}
