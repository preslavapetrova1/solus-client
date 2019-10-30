import { Component, OnInit } from '@angular/core';
import {LanguagesService} from "../../services/languages/languages.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor( public ls: LanguagesService) { }

  ngOnInit() {
  }

}
