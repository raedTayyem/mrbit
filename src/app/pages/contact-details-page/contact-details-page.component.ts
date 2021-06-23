import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user';
import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss'],
})
export class ContactDetailsPageComponent implements OnInit {
  // id!: string;
  contact: Contact | any;
  user$!: Observable<User[]>;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(async (params) => {
      const { id } = params;
      this.contact = await this.contactService.getById(id).toPromise();
    });
    this.user$ = this.userService.user$;
    this.userService.getUser();
  }
}
