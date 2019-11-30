import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cv-year-group',
  templateUrl: './year-group.component.html',
  styleUrls: ['./year-group.component.scss']
})
export class YearGroupComponent implements OnInit {

  @Input() year: string;

  constructor() {
  }

  ngOnInit() {
  }

}
