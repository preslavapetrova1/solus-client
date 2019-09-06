import {Component} from '@angular/core';
import {PortfolioService} from './services/portfolio/portfolio.service';
import {createTokenForReference} from "@angular/compiler/src/identifiers";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'solus-site';

  constructor(public ps: PortfolioService) {
  }

}
