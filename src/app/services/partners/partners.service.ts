import {Injectable} from '@angular/core';
import {IPartners} from "./IPartners";
import {HttpClient} from "@angular/common/http";
import {IProject} from "../portfolio/IProject";

const PARTNERS_URL = 'assets/partners.json';

@Injectable({
  providedIn: 'root'
})
export class PartnersService {

  partners: Array<IPartners>;

  constructor(private http: HttpClient) {
    this.getPartners();
  }

  getPartners() {
    this.http.get(PARTNERS_URL).subscribe((partnerType: Array<IPartners>) => {
      this.partners = partnerType;
    })
  }
}
