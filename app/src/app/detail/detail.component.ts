import { Component, OnInit, Input } from '@angular/core';
import { ExperienceService } from '../services/experience.service';
import { SessionService } from '../services/session.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../environments/environment';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  baseURL = environment.baseURL;
  item;
  user;
  error;
  booking;
  bookingID;

  constructor(
    private activateroute: ActivatedRoute,
    private expService: ExperienceService,
    private session: SessionService,
    private route: Router
  ) { }

  ngOnInit() {

    this.session.getLoginEmitter().subscribe(user => this.user = user);

    this.activateroute.params.subscribe(params => {
    this.expService.detail(params['id']).subscribe(item => {
      this.item = item;

      this.bookingID = item._id;
      setTimeout(() => $('.slider').slider(), 1500);
    });
    });
  }

  addFavorite() {
    this.expService.addFav(this.item._id)
    .subscribe(() => this.route.navigate(['private']));
  }

}
