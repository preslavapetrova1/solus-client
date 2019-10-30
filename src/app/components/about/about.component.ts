import {Component, OnInit} from '@angular/core';
import {PartnersService} from "../../services/partners/partners.service";
import {IPartner, IPartners} from "../../services/partners/IPartners";
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

    // this.partnerService.getPartners().subscribe((partners: Array<IPartners>) => {
    //   for (let i = 0; i < partners.length; i++) {
    //     console.log(partners[i].key);
    //     for (let j = 0; j < partners[i].partners.length; j++) {
    //       console.log(partners[i].partners[j].externalUrl)
    //
    //     }
    //
    //   }

    // partners.forEach((column: IPartners) => {
    //   console.log(column.key)
    //
    //   column.partners.forEach((partner: IPartner) => {
    //     console.log(partner.externalUrl)
    //   })
    // })
    // });


  }
}


