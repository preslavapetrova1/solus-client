import {Component, OnInit} from '@angular/core';
import {LanguagesService} from "../../services/languages/languages.service";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(public ls: LanguagesService) {
  }

  ngOnInit() {
  }

  redirectToFcb() {
    // TODO: this is not where constants should be placed
    const fcbUrl = "https://www.facebook.com/solusdesignvarna/";
    window.open(fcbUrl, "_blank");
  }

}
