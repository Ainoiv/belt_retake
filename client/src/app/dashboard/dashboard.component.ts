import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from './../user';
import { UserService } from './../user.service';
import { Router } from '@angular/router';
import { Question } from './../question';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: Array<User>
  new_question: Question;
  questions: Array<Question>;
  @Input() this_question: Question;
  // @Output() add_a_question = new EventEmitter()


  constructor(private user_service: UserService, private router: Router) { }

  ngOnInit() {
    this.new_question = new Question;

    this.user_service.am_i_logged_in()
      .then(user => console.log(user))
      .catch(() => this.router.navigate(['/login']));

    this.user_service.get_all_users()
      // .then(users => {console.log(users);this.users = users})
      .then(users => this.users = users)
      .catch(err => console.log('Get all users ERROR', err));

    this.user_service.get_all_question()
      .then(questions => this.questions = questions)
      .catch(err => console.log('Get all question ERROR', err));
  
  }

  add_question() {
    console.log('question component', this.new_question);
    this.user_service.add(this.new_question)
      // .then(() => console.log('is it working?'))
      .then(() => this.router.navigate(['dashboard']))
      .catch(err => console.log('Add question ERROR', err));
  }

  
}
