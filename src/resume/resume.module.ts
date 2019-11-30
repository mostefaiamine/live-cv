import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './pages/about/about.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { InformationComponent } from './pages/information/information.component';
import { CardComponent } from './components/card/card.component';
import { YearGroupComponent } from './components/year-group/year-group.component';
import { ExperienceItemComponent } from './components/experience-item/experience-item.component';
import { DividerComponent } from './components/divider/divider.component';
import { CountriesComponent } from './components/countries/countries.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { MatTooltipModule, MatDialogModule } from '@angular/material';
import { SlideshowModule } from 'ng-simple-slideshow';
import { ProjectItemComponent } from './components/project-item/project-item.component';
import { TagsComponent } from './components/tags/tags.component';
import { SkillItemComponent } from './components/skill-item/skill-item.component';
import { StarsComponent } from './components/stars/stars.component';
import { EducationComponent } from './pages/education/education.component';
import { OtherInfoComponent } from './pages/other-info/other-info.component';


@NgModule({
  declarations: [
    AboutComponent,
    CardComponent,
    CountriesComponent,
    DividerComponent,
    ExperienceComponent,
    ExperienceItemComponent,
    InformationComponent,
    ProjectItemComponent,
    ProjectsComponent,
    PageTitleComponent,
    SkillsComponent,
    YearGroupComponent,
    TagsComponent,
    SkillItemComponent,
    StarsComponent,
    EducationComponent,
    OtherInfoComponent,
  ],
  entryComponents: [

  ],
  imports: [
    CommonModule,
    MatTooltipModule,
    MatDialogModule,
    SlideshowModule
  ]
})
export class ResumeModule {

}
