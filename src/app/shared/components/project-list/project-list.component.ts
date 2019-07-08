import {Component, OnInit} from '@angular/core';
import {PortfolioService} from '../../../services/portfolio/portfolio.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  constructor(public ps: PortfolioService) {
  }

  ngOnInit() {
  }

}
