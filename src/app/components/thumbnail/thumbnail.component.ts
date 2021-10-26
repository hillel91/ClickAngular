import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {

  @Input()
  imageSource: string;

  @Output()
  imageClicked: EventEmitter<string>=new EventEmitter<string>();

  imageHasBeenClicked(): void{
    this.imageClicked.emit(this.imageSource);
  }

  constructor() { }

  ngOnInit() {
  }

}
