import { Component, OnInit } from '@angular/core';
import { ResumeService } from '@shared';

@Component({
  selector: 'cv-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  data = null;

  constructor(rs: ResumeService) {
    rs.getData().subscribe(d => this.data = d);
  }

  ngOnInit() {
  }

}
