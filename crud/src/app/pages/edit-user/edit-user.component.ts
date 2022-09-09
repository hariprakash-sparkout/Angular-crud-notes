import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import { EmployeeModal } from './edit-user.modal';

import {
  ActivatedRoute,
  Params,
  Route,
  Router,
  RouterLink,
} from '@angular/router';
import { Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  formValue!: FormGroup;
  employeeModalObj: EmployeeModal = new EmployeeModal();
  allDetails!: any;
  showSave!: boolean;
  showUpdate!: boolean;
  isValid!: boolean;

  constructor(
    private formbuilder: FormBuilder,
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.showSave = this.api.isShowSave;
    this.showUpdate = this.api.isShowUpdate;
    this.formValue = this.formbuilder.group({
      name: [
        '',
        [Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30)]
      ],
      email: ['', [Validators.required, Validators.email]],
      number: [
        '',
        [Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)]
      ],
      salary: [
        '',
        [Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30)]
      ],
    });
    console.log(this.formValue.valid);
    this.api.getEditUserDetails().subscribe((res: any) => {
      console.log(res);
      this.formValue.controls['name'].setValue(res.name);
      this.formValue.controls['email'].setValue(res.email);
      this.formValue.controls['number'].setValue(res.contact);
      this.formValue.controls['salary'].setValue(res.salary);
    });
  }

  postDetails() {
    this.employeeModalObj.name = this.formValue.value.name;
    this.employeeModalObj.contact = this.formValue.value.number;
    this.employeeModalObj.email = this.formValue.value.email;
    this.employeeModalObj.salary = this.formValue.value.salary;

    this.api.postDetails(this.employeeModalObj).subscribe((res) => {
      console.log(res);
    });
    console.log(this.formValue.valid);
    this.router.navigateByUrl('/');
  }
  async updateDetails() {
    this.employeeModalObj.name = this.formValue.value.name;
    this.employeeModalObj.contact = this.formValue.value.number;
    this.employeeModalObj.email = this.formValue.value.email;
    this.employeeModalObj.salary = this.formValue.value.salary;
    let id = await this.api.idDetails;
    this.api.updateDetails(id, this.employeeModalObj).subscribe((res) => {
      console.log(res);
    });

    this.router.navigateByUrl('/');
  }

  formValidation(control: FormControl) {
    if (control.value != null && control.value.indexOf(' ') != -1) {
      return { noSpaceAllowed: true };
    }
    return null;
  }
}
