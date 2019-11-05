import {Component, OnInit} from '@angular/core';
import {LanguagesService} from "../../services/languages/languages.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(public ls: LanguagesService, private router: Router) {
  }


  // goToPage(){
  //   this.router.navigate(['/projects']);
  // }

}

