import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user';
import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss'],
})
export class EditContactComponent implements OnInit {
  @Input() contact: Contact[] | any;
  @Input() user: User[] | any;
  amount: number | any;

  constructor(
    private contactService: ContactService,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  saveContact(): void {
    const data = {
      name: this.contact.name,
      email: this.contact.email,
      phone: this.contact.phone,
    };
    this.contactService.saveContact(data).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addMovesToUser(): void {
    const moves = {
      toId: this.contact._id,
      to: this.contact.name,
      at: Date.now(),
      amount: this.amount,
    };

    this.userService._addMoves(this.user[0], moves, this.amount).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
