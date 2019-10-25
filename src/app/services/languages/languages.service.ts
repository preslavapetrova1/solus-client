import { Injectable } from '@angular/core';
import {ILanguage} from "./ILanguage";
import {HttpClient} from "@angular/common/http";
import {NavigationEnd, Router} from "@angular/router";
import {first} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  currentLanguage: ILanguage;
  currentLanguageKey: string;
  available: boolean;
  private initialLanguage: string;
  private languages: { bg: ILanguage, en: ILanguage};

  constructor(private http: HttpClient, private router: Router) {
    this.languages = {bg: null, en: null};
    this.getLanguage('bg').subscribe((bg: ILanguage) => {
      this.languages.bg = bg;
    });
    this.getLanguage('en').subscribe((en: ILanguage) => {
      this.languages.en = en;
    });
  }

  setLanguage(key: string) {
    if (key === 'bg' && this.currentLanguageKey !== 'bg') {
      this.currentLanguageKey = 'bg';
      this.currentLanguage = this.languages.bg;
      this.navigateTo(key);
    }
    if (key === 'en' && this.currentLanguageKey !== 'en') {
      this.currentLanguageKey = 'en';
      this.currentLanguage = this.languages.en;
      this.navigateTo(key);

      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
        first()).subscribe(res => {
        this.initialLanguage = (res as NavigationEnd).urlAfterRedirects.substring(1, 3);
        const interval = setInterval(() => {
          if (this.languages[this.initialLanguage]) {
            clearInterval(interval);
            this.setLanguage(this.initialLanguage);
            this.available = true;
          }
        }, 100);
      });
    }
  }

  private getLanguage(key: string) {
    return this.http.get<ILanguage>('../assets/' + key + '.json');
  }

  private navigateTo(key: string) {
    const valueToReplace = this.router.url.substring(1, 3);
    this.router.navigateByUrl((this.router.url.replace(valueToReplace, key)));
  }
}


