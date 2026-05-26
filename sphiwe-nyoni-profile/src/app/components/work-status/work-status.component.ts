import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkStatusModel } from '../../models/work-status';

@Component({
  selector: 'app-work-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-status.component.html',
  styleUrl: './work-status.component.css',
})
export class WorkStatusComponent {
  @Input() status!: string;
  workStatusModel: WorkStatusModel = {
    workStatus: '',
    borderColour: '',
    pingAnimationColour: '',
    textColour: '',
  };
  constructor() {}

  ngOnInit(): void {
    if (this.status == 'available') {
      this.workStatusModel = {
        workStatus: 'Available for work',
        borderColour: 'border-green-300',
        pingAnimationColour: 'bg-green-500',
        textColour: 'text-content-highlight',
      };
    } else if (this.status == 'unavailable') {
      this.workStatusModel = {
        workStatus: 'Not available for work',
        borderColour: 'border-red-300',
        pingAnimationColour: 'bg-red-500',
        textColour: 'text-content-error',
      };
    } else if (this.status == 'partially-available') {
      this.workStatusModel = {
        workStatus: 'Partially available for work',
        borderColour: 'border-gray-300',
        pingAnimationColour: 'bg-gray-500',
        textColour: 'text-content-dark',
      };
    }
  }
}
