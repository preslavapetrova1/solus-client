import {Component, OnInit} from '@angular/core';
import {PortfolioService} from '../../../services/portfolio/portfolio.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  projectPhotos: Array<number>;

  constructor(public ps: PortfolioService) {
    for (let i = 0; i < this.ps.portfolio[0].photosCount; i++) {
      this.projectPhotos.push(i);
    }
  }

  ngOnInit() {
  }

}
