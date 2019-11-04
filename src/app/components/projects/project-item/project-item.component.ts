import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PortfolioService} from '../../../services/portfolio/portfolio.service';
import {IProject} from '../../../services/portfolio/IProject';
import {LanguagesService} from '../../../services/languages/languages.service';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  project: IProject;

  constructor(private route: ActivatedRoute, private ps: PortfolioService, public ls: LanguagesService) {
  }

  ngOnInit() {
    const currentProjectId = this.route.snapshot.paramMap.get('projectId');

    for (let i = 0; i < this.ps.portfolio.length; i++) {
      if (this.ps.portfolio[i].id === currentProjectId) {
        this.project = this.ps.portfolio[i];
        // TODO: break the loop when you have found your item
      }
    }
  }

  getProjectByKey() {
    if (this.project.id === 'boutique') {
      return 'BOUTIQUE_RESIDENCE';
    } else if (this.project.id === 'peach-garden') {
      return 'PEACH_GARDEN';
    } else if (this.project.id === 'saint-nicholas') {
      return 'SAINT_NICHOLAS';
    } else if (this.project.id === 'viva4') {
      return 'VIVA4';
    }
  }
}

