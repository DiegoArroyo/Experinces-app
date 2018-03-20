import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../services/experience.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private itemService: ExperienceService) { }

  itemList: Array<Object>;

  allItems() {
    this.itemService.all()
    .subscribe(items => this.itemList = items);
  }

  ngOnInit() {
    this.allItems();
  }

}
