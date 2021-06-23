import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  @Input() user: User[] | any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  AddUser() {
    const data = {
      email: this.user.email,
      name: this.user.name,
      phone: this.user.phone,
      password: this.user.password,
      coins: 100,
      moves: this.user.moves,
    };
    this.userService._addUser(data).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
