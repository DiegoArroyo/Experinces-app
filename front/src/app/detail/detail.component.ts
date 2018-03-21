import { Component, OnInit, Input } from '@angular/core';
import { ExperienceService } from '../services/experience.service';
import { SessionService } from '../services/session.service';
import { ActivatedRoute } from '@angular/router';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  item;
  user;
  error;

  constructor(
    private route: ActivatedRoute,
    private service: ExperienceService,
    private session: SessionService
  ) { }

  ngOnInit() {
    $('.slider').slider();

    this.session.getLoginEmitter().subscribe(user => this.user = user);

    this.route.params.subscribe(params => {
    this.service.detail(params['id']).subscribe(item => this.item = item);
    });
  }

  favorite() {
    this.route.params.subscribe(params => {
      this.service.addFav(params['id'], this.user).subscribe(item => this.item = item);
      });

  }

}
