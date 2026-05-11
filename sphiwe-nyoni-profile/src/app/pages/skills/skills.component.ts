import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from '../../models/skill';
import { SkillCardComponent } from '../../components/skill-card/skill-card.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SkillCardComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  constructor() {}
  skills: Skill[] = [
    {
      name: 'Backend Development',
      skills: ['C#', 'Django', 'Node.js', 'Express', 'REST APIs', 'GraphQL'],
    },
    {
      name: 'Frontend Development',
      skills: [
        'HTML/CSS',
        'JavaScript',
        'TypeScript',
        'Angular',
        'React',
        'Tailwind',
        'Razor Pages',
      ],
    },
    {
      name: 'Databases',
      skills: ['SQL Server', 'PostgreSQL', 'MongoDB', 'ElasticSearch'],
    },
    {
      name: 'Cloud & DevOps',
      skills: [
        'Docker',
        'AWS',
        'Azure',
        'CI/CD',
        'GitHub Actions',
        'Azure DevOps',
        'GIT',
      ],
    },
    {
      name: 'AI & Automation',
      skills: [
        'OpenAI API',
        'Claude API',
        'Windsurf',
        'Copilot',
        'Claude code',
      ],
    },
    {
      name: 'Testing & Quality Assurance',
      skills: ['xUnit', 'NUnit', 'Jest', 'Cypress', 'WebDriverIO'],
    },
    {
      name: 'Engineering Practices',
      skills: [
        'Agile',
        'Scrum',
        'Clean Code',
        'Design Patterns',
        'SOLID Principles',
        'Test-Driven Development',
      ],
    },
  ];
}
