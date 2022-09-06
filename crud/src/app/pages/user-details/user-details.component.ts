import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  allDetails !:any;
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getAllDetails()
  }
  getAllDetails(){
    this.api.getDetails()
    .subscribe(res=>{
      this.allDetails = res
    })
  }
}
