import {Component} from '@angular/core';
import {PortfolioService} from './services/portfolio/portfolio.service';
import {LanguagesService} from "./services/languages/languages.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public ps: PortfolioService, public ls: LanguagesService) {
  }
}
