import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CapturesComponent } from '@shared';

@Component({
  selector: 'cv-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {

  @Input() data: any;

  constructor(private dialogs: MatDialog) { }

  ngOnInit() {
  }

  showCaptures(captures: string[]) {
    const images = captures.map(s => '/assets/images/capture/' + s);
    const ref = this.dialogs.open(CapturesComponent, { width: '800px' });
    ref.componentInstance.images = images;
  }

}
