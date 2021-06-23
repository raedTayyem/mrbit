import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss'],
})
export class AddContactComponent implements OnInit {
  @Input() contact: Contact[] | any;
  constructor(private contactService: ContactService) {}

  ngOnInit(): void {}

  createContact() {
    const data = {
      name: this.contact.name,
      email: this.contact.email,
      phone: this.contact.phone,
    };
    this.contactService._addContact(data).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
