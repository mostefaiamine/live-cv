import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cv-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  @Input() countries: Array<string> = [];

  constructor() {

  }

  ngOnInit() {
  }

}
