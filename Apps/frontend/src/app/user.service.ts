import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'http://localhost:4100/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  getUser(id: number): Promise<User> {
    return this.http.get(`${this.usersUrl}/${id}`).pipe<User>(
      map<any, User>((item) => {
        const {
          name,
          username,
          email,
          address: {
            geo: {
              lat,
              lng
            },
            ...remainingAddress
          },
          phone,
          website,
          company
        } = item;

        const user: User = {
          id,
          name,
          username,
          email,
          address: {
            ...remainingAddress,
            geo: {
              lat: parseFloat(lat),
              lng: parseFloat(lng)
            }
          },
          phone,
          website,
          company
        };

        return user;
      })
    ).toPromise<User>();
  }
}
