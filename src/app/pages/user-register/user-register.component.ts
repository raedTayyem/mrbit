import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss'],
})
export class UserRegisterComponent implements OnInit {
  users$!: Observable<User[]>;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users$ = this.userService.user$;
    // this.contactService.loadContacts();
  }

  // onSetFilter(filterBy: FilterBy) {
  //   this.filterBy = filterBy;
  //   this.contactService.loadContacts(this.filterBy);
  // }
}
