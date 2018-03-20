import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../services/experience.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit {

  constructor(private service: ExperienceService, private route: Router) { }

  formData = new FormData();

  ngOnInit() {
  }

  edit(editForm) {

  }

}
