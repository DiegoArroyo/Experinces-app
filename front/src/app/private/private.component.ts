import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';
import $ from 'jquery';
@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {

  user = {};

  constructor(private session: SessionService, private route: Router) { }

  ngOnInit() {
    this.session.signedIn()
    .subscribe(user => {
      this.user = user;
      // console.log(this.user);
      // $('.dropdown-button').dropdown();
    });
  }

}
