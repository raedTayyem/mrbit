import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { Observable, Subscription } from 'rxjs';
import { ContactService } from 'src/app/services/contact.service';
import { FilterBy } from 'src/app/models/filter-by';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  filterBy = { term: '' };
  contacts$!: Observable<Contact[]>;
  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contacts$ = this.contactService.contacts$;
    this.contactService.loadContacts();
  }

  onSetFilter(filterBy: FilterBy) {
    this.filterBy = filterBy;
    this.contactService.loadContacts(this.filterBy);
  }
}
