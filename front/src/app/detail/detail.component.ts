import { Component, OnInit, Input } from '@angular/core';
import { ExperienceService } from '../services/experience.service';
import { SessionService } from '../services/session.service';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../services/booking.service';

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
  booking;
  bookingID;

  constructor(
    private route: ActivatedRoute,
    private service: ExperienceService,
    private session: SessionService,
    private bookingServ: BookingService
  ) { }

  ngOnInit() {
    $('.slider').slider();

    this.session.getLoginEmitter().subscribe(user => this.user = user);

    this.route.params.subscribe(params => {
    this.service.detail(params['id']).subscribe(item => {
      this.item = item;
      this.bookingID = item._id;
      console.log(this.bookingID);

    });
  
    });
  }

  favorite() {
    this.route.params.subscribe(params => {
      this.service.addFav(params['id'], this.user).subscribe(item => this.item = item);
      });

  }

  book() {
   this.bookingServ.add(this.bookingID, this.user).
   subscribe(bookings => {
     this.booking = bookings;
   });
  }
}
