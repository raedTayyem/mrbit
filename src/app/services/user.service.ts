import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

// Mock the database
const _usersDb: User[] = [
  {
    _id: 'a45alkk',
    name: 'Ochoa Hyde',
    coins: 100,
    email: 'onewasf@onk.com',
    phone: '+69522695 565',
    password: '111',
    moves: [
      {
        toId: 'd99e3u2ih329',
        to: 'Moshiko',
        at: 2652712571,
        amount: 2,
      },
    ],
  },
];

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  private _user$: any = new BehaviorSubject([]);

  public user$ = this._user$.asObservable();

  // loadusers(filterBy = { term: '' }) {
  //   const contacts = _contactsDb.filter(({ name }) => {
  //     return name.toLowerCase().includes(filterBy.term.toLowerCase());
  //   });
  //   this._contacts$.next(contacts);
  // }

  public getUser() {
    const user = _usersDb.filter(({ name }) => {
      return name.toUpperCase();
    });
    this._user$.next(user);
  }

  public _addUser(user: User) {
    user._id = this._makeId();
    _usersDb.push(user);
    this._user$.next(_usersDb);
    console.log(_usersDb);
    return of(user);
  }

  // public saveUser(user: User) {
  //   return user._id ? this._addMoves(user) : this._addMoves(user);
  // }

  public _addMoves(user: User, moves: any) {
    _usersDb.push(user);
    _usersDb[0].moves.push(moves);
    return of(user);
  }

  private _edit(user: User) {
    const users = _usersDb;
    const userIdx = users.findIndex((_user) => _user._id === user._id);
    users.splice(userIdx, 1, user);
    this._user$.next(users);
    return of(user);
  }

  private _makeId(length = 5) {
    var text = '';
    var possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
}
