import { Component, OnInit, Input } from '@angular/core';
import { ExperienceService } from '../services/experience.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  item;

  constructor(
    private route: ActivatedRoute,
    private service: ExperienceService
  ) { }

  editItem() {
  }

  ngOnInit() {
  this.route.params.subscribe(params => {
    this.service.detail(params['id'])
    .subscribe(item => this.item = item);
    });
  }

}
