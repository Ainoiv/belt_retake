import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from './../question';
import { UserService } from './../user.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  new_question: Question;
  // @Output() add_a_question = new EventEmitter()

  constructor(private router: Router, private user_service: UserService) { }

  ngOnInit() {
    this.new_question = new Question;
  }

    add_question() {
    console.log('question component', this.new_question);
    this.user_service.add(this.new_question)
      // .then(() => console.log('is it working?'))
      .then(() => this.router.navigate(['dashboard']))
      .catch(err => console.log('Add question ERROR', err));
  }


}
