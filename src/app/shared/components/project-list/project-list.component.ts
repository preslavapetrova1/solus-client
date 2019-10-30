import {Component, OnInit} from '@angular/core';
import {PortfolioService} from '../../../services/portfolio/portfolio.service';
import {Router} from "@angular/router";
import {LanguagesService} from "../../../services/languages/languages.service";
import {IProject} from "../../../services/portfolio/IProject";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})

export class ProjectListComponent implements OnInit {


  constructor(public ps: PortfolioService, private router: Router, public ls: LanguagesService) {
  }

  ngOnInit() {

  }

  onClick(project: IProject) {
    console.log(project.id);
    this.router.navigate([this.ls.currentLanguageKey + '/projects', project.id])

  }

  getProjectByKey(id: string){
    if (id === "boutique"){
      return "BOUTIQUE_RESIDENCE";
    }

    else if(id === "peach-garden"){
      return "PEACH_GARDEN";
    }

    else if(id === "saint-nicholas"){
      return "SAINT_NICHOLAS";
    }

    else if(id === "viva4"){
      return "VIVA4";
    }
  }

}
