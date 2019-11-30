import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cv-intro-button',
  templateUrl: './intro-button.component.html',
  styleUrls: ['./intro-button.component.scss']
})
export class IntroButtonComponent implements OnInit {

  /** icon */
  @Input() icon: string;

  /** url */
  @Input() url: string;

  constructor() {

  }

  ngOnInit() {
  }

}
