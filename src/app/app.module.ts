import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'; // Import ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http';
import { ApartmentFormComponent } from './apartment-form/apartment-form.component';

import { RouterModule, Routes } from '@angular/router';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { LandlordsComponent } from './landlords/landlords.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ApartmentFormComponent,
    ViewDetailComponent,
    LandlordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule ,// Add ReactiveFormsModule to imports
    FormsModule,
    // RouterModule.forRoot(Routes) // Configure routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
