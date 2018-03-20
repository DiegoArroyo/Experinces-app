import { Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { DetailComponent } from '../detail/detail.component';
import { SignupComponent } from '../signup/signup.component';
import { SigninComponent } from '../signin/signin.component';
import { PrivateComponent } from '../private/private.component';
import { NewExperienceComponent} from '../new-experience/new-experience.component'

export const routes: Routes = [
{ path: '' , component: HomeComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'signin', component: SigninComponent },
{ path: 'private', component: PrivateComponent},
{ path: 'experience/new', component: NewExperienceComponent},
{ path: 'experience/:id', component: DetailComponent },
];
