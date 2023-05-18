import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleEnum } from 'src/app/enums/role-enum';
import { Role } from 'src/app/models/role';
import { RoleService } from 'src/app/services/role.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  formGroup!: FormGroup;
  user:any;

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

  constructor( private usersService: UserService,private roleService:RoleService,private router: Router,private formBuilder: FormBuilder,private activateRouter:ActivatedRoute,){
 
   }
   ngOnInit(): void {
    this.initForm();

    this.usersService.getUserByIgg(this.activateRouter.snapshot.params['igg']).subscribe((result) =>{
     // console.log("result user:");
      this.user=result;
     // console.log(this.user);
      this.initUpForm();
     // console.log(this.formGroup)
 
    });
  }

  initUpForm(){
    this.formGroup = this.formBuilder.group({
      igg: [this.user.igg],
      firstName: [this.user.firstName],
      lastName: [this.user.lastName],
      country:[this.user.country],
      city:[this.user.city],
      userRoles: this.formBuilder.array(this.user.userRoles || [], Validators.required)
    });

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

  isRoleAssigned(role: Role): boolean {
    //return this.user.userRoles.includes(role);
    return this.user.userRoles && this.user.userRoles.includes(role);

  }

  updateUser(){
   // console.log("value igg in params:");
   // console.log(this.activateRouter.snapshot.params['igg']);
    
    this.usersService.updateUserByIgg(this.formGroup.value,this.activateRouter.snapshot.params['igg']).subscribe(result =>{
      if(result!= null){
       // console.log(result);
       alert('the update is succes');
        this.router.navigate(['user']);

      }
      else{
        alert('the update field');
        //console.log('the update field');

      }
    })
    
}


}
