import { Component, OnInit } from '@angular/core';
import { ResumeService } from '@shared';

@Component({
  selector: 'cv-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  private data = null;

  constructor(private ser: ResumeService) {

  }

  ngOnInit() {
    this.ser.getData().subscribe(d => this.data = d);
  }

  /** returns the items associated to the year */
  getItems(y: string) {
    return this.data.experience[y];
  }

  /** gets the years */
  getYears() {
    if (!this.data) {
      return [];
    }
    const result = Object.keys(this.data.experience);
    result.sort((a, b) => a < b ? 1 : -1);
    return result;
  }

}
