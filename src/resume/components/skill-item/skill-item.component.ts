import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cv-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.scss']
})
export class SkillItemComponent implements OnInit {

  @Input() data: any=null;

  constructor() { }

  ngOnInit() {
  }

}
