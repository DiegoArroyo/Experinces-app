import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private session: SessionService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  signUp(signupForm) {
    this.session.signUp(signupForm.value)
    .subscribe(() => this.router.navigate(['']));
  }

}
