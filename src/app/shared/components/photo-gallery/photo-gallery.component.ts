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
  currentIndex: number;
  previewOn: boolean;

  constructor() {
  }

  activatePreview(index: number) {
    this.currentIndex = index;
    this.previewOn = true;
  }

  ngOnInit() {
    this.galleryArray = [];
    for (let i = 0; i < this.photosCount; i++) {
      this.galleryArray.push(i);
    }
    this.previewOn = false;
  }
}
