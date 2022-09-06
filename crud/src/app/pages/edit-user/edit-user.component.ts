import { Component, OnInit } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import { EmployeeModal } from './edit-user.modal';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  formValue!: FormGroup;
  employeeModalObj : EmployeeModal= new EmployeeModal();
  allDetails !:any;
  constructor(private formbuilder: FormBuilder,
    private api:ApiService) {}

  ngOnInit(): void {
    
    this.formValue = this.formbuilder.group({
      name: [''],
      email: [''],
      number:[''],
      salary:['']
    });
  }
 
  postDetails(){
    this.employeeModalObj.name = this.formValue.value.name;
    this.employeeModalObj.contact = this.formValue.value.number;
    this.employeeModalObj.email = this.formValue.value.email;
    this.employeeModalObj.salary = this.formValue.value.salary;

    this.api.postDetails(this.employeeModalObj)
    .subscribe(res=>{
      console.log(res);

    })

  }

 
}
