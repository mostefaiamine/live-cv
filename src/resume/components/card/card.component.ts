import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cv-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  /** title */
  @Input() title: string;

  constructor() {

  }

  ngOnInit() {
  }

}