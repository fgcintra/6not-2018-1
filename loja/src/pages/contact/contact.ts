import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactFormService } from '../../services/contact-form.service';

@Component ({
   selector: 'page-contact',
   templateUrl: 'contact.html'
})
export class ContactPage {

   public data: any;
   public isSubmitted: Boolean = false;

   constructor(public nav: NavController, private formData: ContactFormService) {
      this.nav = nav;
      this.formData = formData;

      this.data = {
         name: '',
         phone: '',
         email: '',
         comment: '',
         termsAccepted: false
      };

   }

   onSubmit(form) {
      this.isSubmitted = true;
      console.log('onSubmit');
      console.log(form);

      if(form.valid && form.value.termsAccepted) {
         this.formData.name = this.data.name;
         this.formData.phone = this.data.phone;
         this.formData.email = this.data.email;
         this.formData.comment = this.data.comment;
         // this.nav.push(ThankyouPage);
      }

   }

   noSubmit(event) {
      event.preventDefault();
   }

   debug(f) {
      console.log(f);
   }

}