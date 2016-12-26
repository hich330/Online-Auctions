import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {User} from "../models/user";

@Injectable()
export class UserService {

  private http:Http;
  public User:User;

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  constructor(http:Http) {
    this.http = http;
  }

  Login():Observable<User> {
    return this.http.get("http://localhost:27017/users/", {headers: this.getHeaders()})
      .map((response: Response) => response.json());
  }

}
