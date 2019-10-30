import { Component, OnInit } from '@angular/core';
import {LanguagesService} from "../../services/languages/languages.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(public ls:LanguagesService) { }

  ngOnInit() {
  }

}
