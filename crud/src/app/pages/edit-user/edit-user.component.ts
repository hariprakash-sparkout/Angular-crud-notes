import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import { EmployeeModal } from './edit-user.modal';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})

export class EditUserComponent implements OnInit, OnDestroy ,OnChanges {
  userFormDetails!: FormGroup;
  employeeModalObj: EmployeeModal = new EmployeeModal();
  allDetails!: any;
  showSaveButton!: boolean;
  showUpdateButton!: boolean;
   isFormValid!: boolean;
  unSubscribeAPICalls: any;
  
  constructor(
    private formbuilder: FormBuilder,
    private api: ApiService,
    private router: Router
  ) {}

  ngOnChanges(changes: SimpleChanges) {
      console.log(changes)
  }

  async ngOnInit() {
    this.showSaveButton = this.api.isShowSaveButton;
    this.showUpdateButton = this.api.isShowUpdateButton;
    this.userFormDetails = this.formbuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required, Validators.pattern('[0-9]{10,}')]],
      salary: ['', [Validators.required, Validators.pattern('[0-9]{3,}')]],
    });

    //getting existing details from the API using id
    this.unSubscribeAPICalls = this.api
      .getEditUserDetails()
      .subscribe((res: any) => {
        console.log(res);

        //Auto filling the form using the information returned from the API
        this.userFormDetails.controls['name'].setValue(res.name);
        this.userFormDetails.controls['email'].setValue(res.email);
        this.userFormDetails.controls['number'].setValue(res.contact);
        this.userFormDetails.controls['salary'].setValue(res.salary);
      });
  }

  //post form details to the API
  postDetails() {
    this.employeeModalObj.name = this.userFormDetails.value.name;
    this.employeeModalObj.contact = this.userFormDetails.value.number;
    this.employeeModalObj.email = this.userFormDetails.value.email;
    this.employeeModalObj.salary = this.userFormDetails.value.salary;

    this.unSubscribeAPICalls = this.api
      .postDetails(this.employeeModalObj)
      .subscribe((res) => {
        console.log(res);
      });
    console.log(this.userFormDetails.valid);
    // this.router.navigateByUrl('/');
  }

  //updating form details to the existing one
  async updateDetails() {
    this.employeeModalObj.name = this.userFormDetails.value.name;
    this.employeeModalObj.contact = this.userFormDetails.value.number;
    this.employeeModalObj.email = this.userFormDetails.value.email;
    this.employeeModalObj.salary = this.userFormDetails.value.salary;

    this.unSubscribeAPICalls = this.api
      .updateDetails(await this.api.idDetails, this.employeeModalObj)
      .subscribe((res) => {
        console.log(res);
      });

    // this.router.navigateByUrl('/');
  }

  ngOnDestroy() {
    if (this.unSubscribeAPICalls) {
      this.unSubscribeAPICalls.unsubscribe();
      console.log('page destroyed');
    }
  }
}
