import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { Project } from '../../models/project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Movie search app',
      description:
        'A movie search web app that allows users to search for movies by title, genre, or keyword.',
      imageUrl: 'assets/incredible-movies.png',
      liveDemoUrl: 'https://incredibe-movies.netlify.app/',
      github: 'https://github.com/snmyk/MovieApp',
    },
    {
      title: 'Landing page',
      description: 'A landing page for a tech retail business.',
      imageUrl: 'assets/smart-tech.png',
      liveDemoUrl: 'https://smarttech6.netlify.app/',
      github: 'https://github.com/snmyk/CODSOFT/tree/main/Task1',
    },
  ];
}
