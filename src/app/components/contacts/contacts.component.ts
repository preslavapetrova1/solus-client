import {Component, OnInit} from '@angular/core';
import {LanguagesService} from "../../services/languages/languages.service";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})

export class ContactsComponent implements OnInit {

  FCB_URL: string;
  MAP_URL: string;

  constructor(public ls: LanguagesService) {
    this.FCB_URL = "https://www.facebook.com/solusdesignvarna/";
    this.MAP_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.9611640339203!2d27.910611415313035!3d43.21030388897482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a45474ee9de73f%3A0xaacb55f1833aaeb9!2z0KHQvtC70YPRgSDQtNC40LfQsNC50L0!5e0!3m2!1sbg!2sbg!4v1568365925388!5m2!1sbg!2sbg"
  }

  ngOnInit() {
  }

  redirectToFcb() {
    window.open(this.FCB_URL, "_blank");
  }

}
