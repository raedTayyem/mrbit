import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  @Input() user: User[] | any;
  signUp = false;
  message: string | any;

  constructor(
    private userService: UserService,
    public authService: AuthService
  ) {
    this.message = '';
  }

  ngOnInit(): void {}

  login(username: string, password: string): boolean {
    this.message = '';
    if (!this.authService.login(username, password)) {
      this.message = 'Incorrect credentials.';
    }
    return false;
  }
}
