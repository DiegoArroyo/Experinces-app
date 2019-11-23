import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private session: SessionService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signIn(signinForm) {
    this.session.signIn(signinForm.value)
    .subscribe(res => this.router.navigate(['private']));
  }

}
