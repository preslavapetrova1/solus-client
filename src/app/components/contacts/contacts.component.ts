import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor() { }



  ngOnInit() {
  }

  redirectToFcb(){

    const fcbUrl = "https://www.facebook.com/solusdesignvarna/"
    window.open(fcbUrl, "_blank");
  }

}
