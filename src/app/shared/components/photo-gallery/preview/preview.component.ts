import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  @Input() photosUrl: string;
  @Input() photosCount: number;
  @Input() currentIndex: number;



  constructor() {
  }

  ngOnInit() {

  }

}
