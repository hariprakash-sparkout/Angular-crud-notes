import { Component, OnInit, OnDestroy, Input, OnChanges } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit, OnDestroy, OnChanges {
  
  public allDetails!: any;
  private unSubscribeAPICalls!: any;
  private rows: any;

  constructor(private api: ApiService) {}

  ngOnChanges() {
    console.log('changes made');
  }
  ngOnInit(): void {
    this.getAllDetails();
    console.log('onInit Called');
  }

  //Get all form details
  getAllDetails() {
    this.unSubscribeAPICalls = this.api.getDetails().subscribe((res) => {
      this.allDetails = res;
    });
  }

  //deleting the particular form data using row index
  deleteUser(row: any) {
    this.unSubscribeAPICalls = this.api
      .deleteDetails(row.id)
      .subscribe((res) => {
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

  ngOnDestroy(): any {
    this.unSubscribeAPICalls.unsubscribe();
    console.log('page destroyed');
  }
}
