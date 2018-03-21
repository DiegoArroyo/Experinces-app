import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from './services/session.service';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: any;
  error: any;

  constructor(
    private session: SessionService,
    private router: Router
  ) {}

  ngOnInit() {
    this.session.getLoginEmitter().subscribe(user => this.successCb(user));
  }

  signOut() {
    this.session.signOut().subscribe(() => {
      this.successCb(null);
      },
      (err) => this.errorCb(err));
  }

  errorCb(err) {
    this.error = err;
    this.user = null;
  }

  successCb(user) {
    this.user = user;
    this.error = null;
    this.router.navigate(['/']);
  }

}
