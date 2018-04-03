import { Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { DetailComponent } from '../detail/detail.component';
import { NewExperienceComponent } from '../new-experience/new-experience.component';
import { SignupComponent } from '../signup/signup.component';
import { SigninComponent } from '../signin/signin.component';
import { PrivateComponent } from '../private/private.component';
import { EditExperienceComponent } from '../edit-experience/edit-experience.component';
import { BookingComponent } from '../booking/booking.component';

export const routes: Routes = [
{ path: '' , component: HomeComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'signin', component: SigninComponent },
{ path: 'private', component: PrivateComponent},
{ path: 'experience/new', component: NewExperienceComponent},
{ path: 'experience/edit/:id', component: EditExperienceComponent},
{ path: 'experience/single/:id', component: DetailComponent },
{ path: 'experience/single/booking/:id', component: BookingComponent },
];
