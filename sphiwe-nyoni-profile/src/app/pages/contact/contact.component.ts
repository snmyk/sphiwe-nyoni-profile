import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
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
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const message = (document.getElementById('message') as HTMLInputElement)
      .value;

    emailjs
      .send('service_3rpro5j', 'template_e0cehrr', { name, email, message })
      .then(
        (response: EmailJSResponseStatus) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.error('FAILED...', error);
          alert('Failed to send message. Please try again later.');
        },
      );
  }
}
