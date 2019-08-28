import {Component, OnInit} from '@angular/core';
import {PortfolioService} from '../../../services/portfolio/portfolio.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})

export class ProjectListComponent implements OnInit {


  constructor(public ps: PortfolioService, private router: Router) {
  }

  ngOnInit() {

  }

  onClick(project) {
    console.log(project.id);
    this.router.navigate(['/projects', project.id])

  }

}
