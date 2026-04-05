import { Component } from '@angular/core';

@Component({
  selector: 'app-work-status',
  standalone: true,
  imports: [],
  templateUrl: './work-status.component.html',
  styleUrl: './work-status.component.css',
})
export class WorkStatusComponent {
  workStatus: string = 'Available for work';
}
