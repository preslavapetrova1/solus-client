import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PortfolioService} from "../../../services/portfolio/portfolio.service";

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {

  public currentProjectId;
  public currentProjectTitle;


  constructor(private route: ActivatedRoute, private ps: PortfolioService) {
  }

  ngOnInit() {
    this.currentProjectId = this.route.snapshot.paramMap.get('projectId');

    for (let i = 0; i < this.ps.portfolio.length; i++) {
      if (this.ps.portfolio[i].id == this.currentProjectId) {
        this.currentProjectTitle=this.ps.portfolio[i].title
      }
    }
  }
}

