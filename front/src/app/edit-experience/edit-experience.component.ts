import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../services/experience.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})

export class EditExperienceComponent implements OnInit {
  item: any;
  uploader: FileUploader = new FileUploader({});

  constructor(
    private service: ExperienceService,
    private activateRoute: ActivatedRoute,
    private route: Router) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.service.detail(params['id'])
      .subscribe(item => {
          this.item = item;
          this.uploader.options.url = `http://localhost:3000/api/experience/addPhoto/${params['id']}`
        });
      });
  }

  editItem(itemForm) {
    this.service.patch(itemForm.value, this.item._id)
      .subscribe(itemChanged => {
        this.item = itemChanged;
        this.route.navigate(['experience/single', this.item._id]);
      });
  }

  addPhoto() {
    this.uploader.uploadAll();
    this.uploader.onCompleteItem = () => this.route.navigate(['experience/single', this.item._id]);
  }

}
