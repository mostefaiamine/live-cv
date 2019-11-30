import { Component, OnInit } from '@angular/core';
import { ResumeService } from '@shared';

@Component({
  selector: 'cv-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  public data: any;

  constructor(private rs: ResumeService) {
    rs.getData().subscribe(
      d => this.data = d
    );
  }

  ngOnInit() {
  }

}