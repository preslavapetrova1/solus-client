import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  @Input() photosUrl: string;
  @Input() photosCount: number;
  @Input() currentIndex: number;
  @Output() xClicked: EventEmitter<any>;


  constructor() {
    this.xClicked = new EventEmitter();
  }

  ngOnInit() {

  }

  closePreview() {
    this.xClicked.emit();
  }
}
