import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  onSubmit() {
    alert(`Thank you, ${this.formData.name}! Your message has been sent.`);
    this.formData = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
  }
}