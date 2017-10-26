import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';
import { Question } from './question';
import 'rxjs/add/operator/map';



@Injectable()
export class UserService {

  constructor(private http: Http) { }

    create(new_user: User) {
    console.log('add user service', new_user)
    return this.http.post('/login', new_user).map(data => data.json).toPromise();
  }

    get_all_users() {
    return this.http.get('/get_all_users').map(data => data.json()).toPromise();
  }

    am_i_logged_in() {
    return this.http.get('/am_i_logged_in').map(data => data.json()).toPromise();
  }


    add(new_question: Question) {
    // console.log('add question service', new_question);
    return this.http.post('/add', new_question).map(data => data.json()).toPromise();
  }

    get_all_question() {
    return this.http.get('/get_all_question').map(data => data.json()).toPromise();
  }

}
