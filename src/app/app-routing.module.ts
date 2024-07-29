import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ApartmentFormComponent } from './apartment-form/apartment-form.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { LandlordsComponent } from './landlords/landlords.component';
import { AuthguardGuard } from './authguard.guard';
import { CommentsComponent } from './comments/comments.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, 
    canActivate:[AuthguardGuard]
  },
  {path:'apartment-form',component:ApartmentFormComponent},
  { path: 'comments/:id', component: CommentsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'view-detail/:id',component:ViewDetailComponent},
  {path:'landlords',component:LandlordsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

