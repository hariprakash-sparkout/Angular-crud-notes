import { Component, OnInit } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  formValue!: FormGroup;
  constructor(private formbuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      name: [''],
      email: [''],
      number:[''],
      salary:['']
    });
  }
}
