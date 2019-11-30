import { Routes, RouterModule } from '@angular/router';
import { AboutComponent, ExperienceComponent, ProjectsComponent, SkillsComponent, EducationComponent, OtherInfoComponent } from '@resume';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/about',
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: AboutComponent,
        resolve: { data: 'resolve_data' }
    },
    {
        path: 'experience',
        component: ExperienceComponent,
        resolve: { data: 'resolve_data' }
    },
    {
        path: 'projects',
        component: ProjectsComponent,
        resolve: { data: 'resolve_data' }
    },
    {
        path: 'skills',
        component: SkillsComponent,
        resolve: { data: 'resolve_data' }
    },
    {
        path: 'education',
        component: EducationComponent,
        resolve: { data: 'resolve_data' }
    },
    {
        path: 'more',
        component: OtherInfoComponent,
        resolve: { data: 'resolve_data' }
    }
];

export const appRouting = RouterModule.forRoot(appRoutes);
