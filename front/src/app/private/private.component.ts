import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';
import { UserService } from '../services/user.service';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {

  profile = {};

  constructor(
    private session: SessionService,
    private route: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.currentUser().subscribe(user => {
      this.profile = user;
    });
  }

}
