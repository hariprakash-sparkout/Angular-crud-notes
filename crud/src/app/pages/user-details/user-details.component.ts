import { Component, OnInit,OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})

export class UserDetailsComponent implements OnInit ,OnDestroy{
  allDetails!: any;
  rows: any;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getAllDetails();
  }

  //Get all form details
  getAllDetails() {
    this.api.getDetails().subscribe((res) => {
      this.allDetails = res;
    });
  }

  //deleting the particular form data using row index
  deleteUser(row: any) {
    this.api.deleteDetails(row.id).subscribe((res) => {
      alert('user Removed');
      this.getAllDetails();
    });
  }

  //edit the particular form data using row index
  editUser(row: any) {
    console.log(row.id);
    this.api.editUsers(row.id);
    this.api.isShowSaveButton = false;
    this.api.isShowUpdateButton = true;
  }

  ngOnDestroy():any {
    this.allDetails.unsubscribe()

  }
}
