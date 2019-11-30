import { Component, OnInit } from '@angular/core';
import { ResumeService } from '@shared';

@Component({
  selector: 'cv-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  data = null;

  constructor(rs: ResumeService) {
    rs.getData().subscribe(d => this.data = d);
  }

  ngOnInit() {
  }

}
