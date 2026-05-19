import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobCardComponent } from '../../components/job-card/job-card.component';
import { Job } from '../../models/job';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule, JobCardComponent],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css',
})
export class WorkExperienceComponent {
  jobs: Job[] = [
    {
      title: 'Junior Developer',
      company: 'Telesure Investments Holdings (Pty)',
      duration: 'May 2026 - Present',
      list: [
        'Identify shortcomings in existing processes, systems and procedures, and use established change management programs to address them.',
        'Develop existing applications and contribute to development of new applications by analysing and identifying areas for modification and improvement.',
        'Direct software programming and development of documentation.',
        'Develop and direct software system testing and validation procedures.',
      ],
    },
    {
      title: 'Junior Software Engineer',
      company: 'Strategnos (Pty)',
      duration: 'Nov 2025 - Apr 2026',
      list: [
        'Designed and developed a Microsoft Word Office Add-in to automate cold-chain compliance reporting by integrating with an enterprise cloud platform, SSRS reports, and large-scale IoT temperature datasets.',
        'Architected asynchronous data retrieval workflows to handle ~1.5 million+ temperature records per report, overcoming Power Automate execution timeouts and platform constraints.',
        'Integrated GPT-4-powered AI features to review generated documents and assist users in drafting high-quality, compliant reports.',
        'Built a custom PowerBI visual using TypeScript and SVG manipulation to visualize warehouse layouts and IoT logger placement.',
      ],
    },
    {
      title: 'Junior Fullstack Software Engineer',
      company: 'Full Stack (Pty)',
      duration: 'Apr 2024 - Nov 2025',
      list: [
        'Built scalable APIs in .NET for white-label software powering one of South Africa’s leading online travel agencies. Implemented ElasticSearch for search and suggestions, and MongoDB for efficient data storage.',
        'One of two developers who designed and developed a web app from the ground up using .NET Blazor, integrated with Umbraco CMS for content management, and implemented Azure AD B2C authentication.',
        'Integrated third-party services including Document Drafter (document automation) and Adobe Sign for e-signature workflows.',
        'Developed a financial planning platform using Django, integrated with Stripe for payments and custom Azure B2C policies with SendGrid for email customization.',
      ],
    },
  ];
}
