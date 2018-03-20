import { MaterializeModule } from 'angular2-materialize';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { FileSelectDirective } from "ng2-file-upload";


import { ExperienceService } from './services/experience.service';
import { SessionService } from './services/session.service';
import { UserService } from './services/user.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { NewExperienceComponent } from './new-experience/new-experience.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { PrivateComponent } from './private/private.component';
import { EditExperienceComponent } from './edit-experience/edit-experience.component';

import { routes } from './routes/app.route';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    SignupComponent,
    SigninComponent,
    PrivateComponent,
    NewExperienceComponent,
    EditExperienceComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MaterializeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ExperienceService,
    SessionService,
    UserService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
