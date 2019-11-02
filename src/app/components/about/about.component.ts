import {Component, OnInit} from '@angular/core';
import {PartnersService} from "../../services/partners/partners.service";
import {IPartner} from "../../services/partners/IPartners";
import {LanguagesService} from "../../services/languages/languages.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public partnerService: PartnersService, public ls: LanguagesService) {
  }

  redirect(partner:IPartner) {
    window.open(partner.externalUrl, "_blank");
  }

  ngOnInit() {
  }
}


