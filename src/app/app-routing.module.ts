import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { SideNavBarComponent } from './shared/side-nav-bar/side-nav-bar.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { OffersComponent } from './pages/offers/offers.component';
import { UpdateUserComponent } from './pages/update-user/update-user.component';


const routes: Routes = [
  {path: 'user', 
  component: UsersComponent
 },

 {
   path:"sidebar",
   component: SideNavBarComponent
 },
 {
   path:"navbar",
   component: NavBarComponent
 },
 {
  path:"navbar",
  component: NavBarComponent
},
{
  path:"adduser",
  component: AddUserComponent
},
{
  path:"user/update/:igg",
  component: UpdateUserComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// path:"doctor/update/:id",