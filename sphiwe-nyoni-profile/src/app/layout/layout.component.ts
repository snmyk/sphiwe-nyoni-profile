import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { HomeComponent } from '../pages/home/home.component';
import { AboutComponent } from '../pages/about/about.component';
import { SkillsComponent } from '../pages/skills/skills.component';
import { WorkExperienceComponent } from '../pages/work-experience/work-experience.component';
import { ProjectsComponent } from '../pages/projects/projects.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    WorkExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}
