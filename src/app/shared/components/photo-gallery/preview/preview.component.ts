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
  @Output() rightArrowClicked: EventEmitter<any>;
  @Output() leftArrowClicked: EventEmitter<any>;


  constructor() {
    this.xClicked = new EventEmitter();
    this.rightArrowClicked = new EventEmitter();
    this.leftArrowClicked = new EventEmitter();
  }

  ngOnInit() {
  }

  closePreview() {
    this.xClicked.emit();
  }


  nextProject() {
    this.rightArrowClicked.emit();
  }

  previousProject(){
    this.leftArrowClicked.emit();
  }

}
