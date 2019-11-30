import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cv-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  goToAbout() {
    this.router.navigate(['/about']);
  }

  goToExperience() {
    this.router.navigate(['/experience']);
  }

  goToProjects() {
    this.router.navigate(['/projects']);
  }

  goToSkills() {
    this.router.navigate(['/skills']);
  }

  goToEducation() {
    this.router.navigate(['/education']);
  }

  goToMore() {
    this.router.navigate(['/more']);
  }
}

