import { Component, OnInit } from '@angular/core';
import { ResumeService } from '@shared';

@Component({
  selector: 'cv-other-info',
  templateUrl: './other-info.component.html',
  styleUrls: ['./other-info.component.scss']
})
export class OtherInfoComponent implements OnInit {

  data = null;

  constructor(rs: ResumeService) {
    rs.getData().subscribe(
      d => this.data = d
    );
  }

  ngOnInit() {
  }

}
