import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', Validators.required]
    });
  }

  sendMessage() {
    this.markControlsAsTouched();
    if (this.contactForm.valid) {
      // Here you can send the message or perform any other action
      console.log(this.contactForm.value);
    } else {
      console.log(this.contactForm.value)
      // Form is invalid, handle error or show validation messages
    }
  }

  private markControlsAsTouched() {
    Object.values(this.contactForm.controls).forEach(ctl => {
      ctl.markAsTouched();
    });
  }
}
