import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../services/experience.service';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.css']
})
export class NewExperienceComponent implements OnInit {

  uploader: FileUploader = new FileUploader({
    url: `http://localhost:3000/api/experience/new`
  });

  constructor(
    private itemService: ExperienceService,
    private router: Router
  ) { }

  itemNew: Object;
  

  newItem(itemForm) {
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('title', itemForm.value.title);
      form.append('description', itemForm.value.description);
      form.append('price', itemForm.value.price);
      form.append('includes', itemForm.value.includes);
      form.append('places', itemForm.value.places);
      form.append('duration', itemForm.value.duration);
      form.append('location', itemForm.value.location);
    };
    this.uploader.uploadAll();
    this.uploader.onCompleteItem = () => this.router.navigate(['private']);
  }

  ngOnInit() {

  }

}
