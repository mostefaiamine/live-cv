import { Component, OnInit } from '@angular/core';
import { ResumeService } from '@shared';

@Component({
  selector: 'cv-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  data: any = null;

  constructor(rs: ResumeService) {
    rs.getData().subscribe(d => this.data = d);
  }

  ngOnInit() {
  }

}
