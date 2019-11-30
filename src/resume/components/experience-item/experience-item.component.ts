import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cv-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.scss']
})
export class ExperienceItemComponent implements OnInit {

  /** data */
  @Input() data: any;

  constructor() { }

  ngOnInit() {
    /* yes */
   }

}
