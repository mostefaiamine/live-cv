import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ResumeService } from '@shared';

@Component({
  selector: 'cv-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  data: any = null;

  images = ['/assets/images/capture/quality-1.png', '/assets/images/capture/quality-2.jpg']

  constructor(private rs: ResumeService) {
    this.rs.getData().subscribe(
      d => this.data = d
    );
  }

  ngOnInit() { }

  /** returns the items associated to the year */
  getItems(y: string) {
    return this.data.references[y];
  }

  /** gets the years */
  getYears() {
    if (!this.data) {
      return [];
    }
    const result = Object.keys(this.data.references);
    result.sort((a, b) => a < b ? 1 : -1);
    return result;
  } 

  show() {
   

  }

}
