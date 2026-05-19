import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Job } from '../../models/job';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.css',
})
export class JobCardComponent {
  @Input() job!: Job;
}
