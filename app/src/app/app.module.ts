import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';
import { FileUploadModule } from "ng2-file-upload";
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { EditExperienceComponent } from './edit-experience/edit-experience.component';
import { HomeComponent } from './home/home.component';
import { NewExperienceComponent } from './new-experience/new-experience.component';
import { PrivateComponent } from './private/private.component';
import { routes } from './routes/app.route';
import { ExperienceService } from './services/experience.service';
import { SessionService } from './services/session.service';
import { UserService } from './services/user.service';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MaterializeModule,
    RouterModule.forRoot(routes),
    FileUploadModule
  ],
  providers: [
    ExperienceService,
    SessionService,
    UserService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
