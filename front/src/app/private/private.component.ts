import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {

  currentUser: Object;

  constructor(private session: SessionService) { }

  ngOnInit() {
    this.session.signedIn()
    .subscribe(user => this.currentUser = user);
  }

}
