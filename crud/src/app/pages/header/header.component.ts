import { Component, OnChanges, OnInit,SimpleChanges } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnChanges {
  
  constructor(private api: ApiService,) { }

  ngOnInit(): void {
    
  }
  ngOnChanges(changes:SimpleChanges) {
    console.log(changes)
}
  addDetails(){
    this.api.idDetails=null;
    this.api.isShowSaveButton = true;
    this.api.isShowUpdateButton = false;
  }
}
