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
        this.route.navigate(['experience/', this.item._id]);
        console.log(itemChanged);
      });
  }

  addPhoto() {
    // console.log(this.uploader)
    // this.uploader.queue[0].method ="PATCH"
    this.uploader.uploadAll();
    this.uploader.onCompleteItem = () => this.route.navigate(['private']);
  }

}



// this.uploader.onBuildItemForm = (item, form) => {
//   form.append('title', itemForm.value.title);
//   form.append('description', itemForm.value.description);
//   form.append('price', itemForm.value.price);
//   form.append('includes', itemForm.value.includes);
//   form.append('places', itemForm.value.places);
//   form.append('duration', itemForm.value.duration);
//   form.append('location', itemForm.value.location);
// };
// this.uploader.uploadAll();
// this.uploader.onCompleteItem = () => this.route.navigate(['private']);