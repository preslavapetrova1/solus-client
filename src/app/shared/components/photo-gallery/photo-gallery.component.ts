import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss']
})
export class PhotoGalleryComponent implements OnInit {

  @Input() photosUrl: string;
  @Input() photosCount: number;
  galleryArray: Array<number>;

  constructor() {
  }

  ngOnInit() {
    this.galleryArray = [];
    for (let i = 0; i < this.photosCount; i++) {
      this.galleryArray.push(i);
    }
  }
}
