import { Component } from '@angular/core';
import { WorkStatusComponent } from '../../components/work-status/work-status.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WorkStatusComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
