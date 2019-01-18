import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Contact } from '../Models/Contact';
import { Country } from '../MOdels/Country';
import { countries } from "../Data/countries-data";
import { SendEmailService } from '../service/mail/send-email.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  mailsuccess: boolean = false;
  mailfailed: boolean = false;
  loader: boolean = false;
  forminfomessage: string = '';
  phonePattern = "^[0-9]{10}$";

  contactModel: Contact;
  countries: Country[] = countries;

  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.email, Validators.required]);  //Validators.required,
  phone = new FormControl('', [Validators.required, Validators.pattern(this.phonePattern)]);
  country = new FormControl('', [Validators.required]);
  location = new FormControl('', [Validators.required]);

  constructor(private sendEmailService: SendEmailService) {
  }

  ngOnInit() {
    this.contactModel = new Contact();
  }

  getErrorMessage() {
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onSave(form: NgForm) {
    this.mailsuccess = false;
    this.mailfailed = false;
    this.forminfomessage = '';
    this.loader = true;

    if (this.name.invalid || this.email.hasError('email') || this.phone.invalid || this.country.invalid || this.location.invalid) {
      this.loader = false;
      this.forminfomessage = 'Please fill the required fields.';
      return;
    }
    
    
    let selectedCountry = this.countries.find( c => c.code === this.contactModel.cont_Country);
    this.contactModel.cont_Phone = selectedCountry.dial_code + " " + this.contactModel.cont_Phone;
    this.contactModel.cont_Country = selectedCountry.name;
  
    debugger;
    this.sendEmailService.RequestMail(this.contactModel).subscribe(
      (data) => {
        this.loader = false;
        if (data.text() == 'Success') {
          this.mailsuccess = true;
          this.forminfomessage = 'Thank you. We will contact you soon.';
        } else {
          this.mailfailed = true;
          this.forminfomessage = 'Failed to send mail try again.';
        }
        this.clearForm();
        form.resetForm();
      },
      (error: any) => {
        this.clearForm();
        form.resetForm();
        this.loader = false;
        this.mailfailed = true;
        this.forminfomessage = 'Failed to send mail try again.';
      });
  }

  clearForm() {
    this.name.reset('');
    this.email.reset('');
    this.phone.reset('');
    this.country.reset('');
    this.location.reset('');
  }

}