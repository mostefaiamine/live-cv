import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'cv-captures',
  templateUrl: './captures.component.html',
  styleUrls: ['./captures.component.scss']
})
export class CapturesComponent implements OnInit {

  /** images */
  @Input() images: Array<string> = [];

  constructor(public dialogRef: MatDialogRef<CapturesComponent>) { } 

  ngOnInit() {
  }

}
