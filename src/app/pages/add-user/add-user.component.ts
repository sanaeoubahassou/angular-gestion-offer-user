import { Component, OnInit } from '@angular/core';
//Import the required Angular form-related modules in your component file (app.component.ts or any other relevant component file):
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleEnum } from 'src/app/enums/role-enum';
import { Role } from 'src/app/models/role';
import { RoleService } from 'src/app/services/role.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  formGroup!: FormGroup;
  errorField:any;
  //allRoles!: 
  checkedRoles: Role[] = [];
  roles: Role[] = [
    { id: 1,role: RoleEnum.Offer, checked: false },
    { id: 2,role: RoleEnum.Referential, checked: false },
    { id: 3,role: RoleEnum.Delegation, checked: false },
    { id: 4,role: RoleEnum.ValidatorContractCadre, checked: false },
    { id: 5,role: RoleEnum.Report, checked: false },
    { id: 6,role: RoleEnum.Document, checked: false },
    { id: 7,role: RoleEnum.ContractMass, checked: false },
    { id: 8,role: RoleEnum.MasterRole, checked: false },
  ];

  constructor( private usersService: UserService,private roleService:RoleService,private router: Router,private formBuilder: FormBuilder){

   }

  ngOnInit(): void {
    this.initForm();
    //this.getRolles();
  }
  initForm(){
      this.formGroup = this.formBuilder.group({
      igg: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      country:['', Validators.required],
      city:  new FormControl ('', [Validators.required]),
      userRoles: this.formBuilder.array([], Validators.required)
    });
  }
  get rolesFormArray() {
    return this.formGroup.get('userRoles') as FormArray;
  }

  onRoleCheckboxChange(event: any, r: Role) {
    if (event.target.checked) {
      this.rolesFormArray.push(this.formBuilder.control(r));
    } else {
      const index = this.rolesFormArray.controls.findIndex(
        (control) => control.value === r
      );
      this.rolesFormArray.removeAt(index);
    }
  }



addUser(){
//  this.submitRoles();
  this.usersService.createUser(this.formGroup.value).subscribe(result =>{
    if(result != null){
      console.log(result);
      alert('the registrer is succes');
      this.router.navigate(['user']);
    }
    else{
      alert('the register field');
      console.log("the register field")
    }
  },(error) =>{
    console.log("this.errorField");
    this.errorField= error.error;
    console.log(this.errorField)
  })
}
/*
  initForm(){
    this.formGroup =new FormGroup({
      igg: new FormControl ('', [Validators.required]),
      firstName: new FormControl ('', [Validators.required]),
      lastName: new FormControl ('', [Validators.required]),
      country: new FormControl ('', [Validators.required]),
      city:  new FormControl ('', [Validators.required]),
      userRoles: new FormControl(this.checkedRoles), // Assign the initial value here
    });
  }

  
  //      userRoles:this.checkedRoles,
//  roles: this.formBuilder.array([])
submitRoles() {
   this.checkedRoles = this.roles.filter(role => role.checked);
  console.log(this.checkedRoles);

}
*/




/*
getRolles(){
  this.roleService.getAllRoles()
  .subscribe((response:any)=>{     
    this.allRoles = response;
    console.log(this.allRoles);
  }, err =>{
    console.log(err);
  })
}
*/


  

}
