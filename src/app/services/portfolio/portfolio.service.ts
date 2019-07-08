import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {IProject} from './IProject';

const PORTFOLIO_URL = 'assets/portfolio.json';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  portfolio: Array<IProject>;

  constructor(private http: HttpClient) {
    this.getPortfolio();
  }

  getPortfolio() {
    this.http.get(PORTFOLIO_URL).subscribe((projects: Array<IProject>) => {
      this.portfolio = projects;
    });
  }
}
