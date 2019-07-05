import { Component, OnInit } from '@angular/core';
import {Project1Service} from "../../../project1.service";

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss']
})
export class PhotoGalleryComponent implements OnInit {

  public images=[];

  constructor(private _project1Service: Project1Service) { }

  ngOnInit() {
    this.images=this._project1Service.getImages();
  }

}
