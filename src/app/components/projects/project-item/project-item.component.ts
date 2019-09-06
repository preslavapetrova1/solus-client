import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PortfolioService} from "../../../services/portfolio/portfolio.service";
import {IProject} from "../../../services/portfolio/IProject";

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {

  project: IProject;

  constructor(private route: ActivatedRoute, private ps: PortfolioService) {
  }

  ngOnInit() {
    const currentProjectId = this.route.snapshot.paramMap.get('projectId');

    for (let i = 0; i < this.ps.portfolio.length; i++) {
      if (this.ps.portfolio[i].id === currentProjectId) {
        this.project=this.ps.portfolio[i];
      }
    }
  }
}

