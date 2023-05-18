import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';
import { RoleEnum } from 'src/app/enums/role-enum';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  logo:string = "assets/images/logo/logo-total-energie.png";
  showDropdown = false;
  selectedOption = 'Séléctionner';
  options = ['Option 1', 'Option 2', 'Option 3'];

  currentPage = 0; // Current page index
  pageSize = 10; // Number of users to display per page
  totalUsers = 0; // Total number of users

  public users!:User[];
  public rolesArray!: string[];

  allRoles = Object.values(RoleEnum);

  constructor(private userService: UserService, private http: HttpClient, private router: Router) {
    this.rolesArray = Object.values(RoleEnum);
    console.log( "this.rolesArray");
    console.log(this.rolesArray);
   
  }

ngOnInit(): void {
  this.allUsers();
}

toggleDropdown() {
  this.showDropdown = !this.showDropdown;
}

selectOption(option: string) {
  this.selectedOption = option;
  this.showDropdown = false;
}

allUsers(){
  this.userService.getUsers( this.pageSize,this.currentPage)
  .subscribe((response:any)=>{     
    this.users = response.content;
   // console.log(this.users);
  }, err =>{
    console.log(err);
  })
} 

public deleteUser(igg:string) {
  this.userService.deleteUserByIgg(igg).subscribe(result =>{
    if(result != null) {
      //alert('seccesus delete');
      this.router.navigate(['users']);
      window.location.reload();
    }
    else{
      alert('echec delete')
    }
  })
}



}
