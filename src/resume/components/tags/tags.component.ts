import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cv-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  /** tags */
  @Input() tags: Array<string> = [];

  constructor() { }

  ngOnInit() {
  }

}
