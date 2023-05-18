import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './pages/users/users.component';
import { SideNavBarComponent } from './shared/side-nav-bar/side-nav-bar.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { OffersComponent } from './pages/offers/offers.component';
import { UpdateUserComponent } from './pages/update-user/update-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SideNavBarComponent,
    NavBarComponent,
    AddUserComponent,
    OffersComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
