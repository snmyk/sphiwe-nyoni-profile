import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  sendingMessage: boolean = false;
  isLoading: boolean = false;
  isSuccess: boolean = false;
  feedbackMessage: string = '';

  constructor() {
    emailjs.init({
      publicKey: 'SqkStLYagYvnSOFlU',
      blockHeadless: true,
      limitRate: {
        id: 'service_3rpro5j',
        throttle: 10000,
      },
    });
  }

  onSubmit() {
    this.isLoading = true;
    this.sendingMessage = true;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const message = (document.getElementById('message') as HTMLInputElement)
      .value;

    emailjs
      .send('service_3rpro5j', 'template_e0cehrr', { name, email, message })
      .then(
        (response: EmailJSResponseStatus) => {
          if (response.status === 200) {
            this.isSuccess = true;
            this.feedbackMessage =
              'Thank you for reaching out. Your message was sent successfully! I will get back to you as soon as possible.';
          }
          this.isLoading = false;
          this.sendingMessage = false;
        },
        (error) => {
          this.feedbackMessage =
            'Failed to send message. Please try again later.';
          this.isLoading = false;
          this.sendingMessage = false;
        },
      );
  }
}
