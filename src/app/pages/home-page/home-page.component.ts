import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { BitCoinService } from 'src/app/services/bit-coin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  objectKeys = Object.keys;
  cryptos: any;
  // user$: Observable<User[]> | any;
  user$!: Observable<User[]>;
  constructor(
    private data: BitCoinService,
    private userService: UserService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.user$ = this.userService.user$;
    this.userService.getUser();
    localStorage.setItem('users', JSON.stringify(this.user$));
    const currUser = localStorage.getItem('users');
    localStorage.setItem('username', JSON.stringify(currUser));
    // this.user$ = currUser;
    this.data.getPrices().subscribe((res) => {
      this.cryptos = res;
    });
  }
}
