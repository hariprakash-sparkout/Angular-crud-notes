import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  allDetails!: any;
  rows: any;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getAllDetails();
  }
  getAllDetails() {
    let res = this.api.getDetails()
    // this.api.getDetails().subscribe((res) => {
      this.allDetails = res;
    // });
  }
  deleteUser(row: any) {
    this.api.deleteDetails(row.id)
    // .subscribe((res) => {
    //   alert('user Removed');
    //   this.getAllDetails();
    // });
    this.getAllDetails();
  }
  editUser(row: any) {
    console.log(row.id);
    this.api.editUsers(row.id);
    this.api.isShowSave = false;
    this.api.isShowUpdate = true;
    
  }
   
}

