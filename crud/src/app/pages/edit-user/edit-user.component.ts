import { Component, OnInit } from '@angular/core';
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
export class EditUserComponent implements OnInit,OnDestroy {
  formValue!: FormGroup;
  employeeModalObj: EmployeeModal = new EmployeeModal();
  allDetails!: any;
  showSave!: boolean;
  showUpdate!: boolean;
  isValid!: boolean;

  constructor(
    private formbuilder: FormBuilder,
    private api: ApiService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.showSave = this.api.isShowSave;
    this.showUpdate = this.api.isShowUpdate;
    this.formValue = this.formbuilder.group({
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
   
    this.api.updateDetails(await this.api.idDetails, this.employeeModalObj).subscribe((res) => {
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

  async ngOnDestroy() {
    this.api.updateDetails(await this.api.idDetails, this.employeeModalObj).unsubscribe()
  }
}
