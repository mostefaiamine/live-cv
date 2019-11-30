import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cv-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {

  @Input() value : number = 0;

  constructor() { }

  ngOnInit() {
  }

  arr(n: number){
    return Array(n);
  }

}
