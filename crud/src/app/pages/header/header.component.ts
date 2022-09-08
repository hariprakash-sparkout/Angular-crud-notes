import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor(private api: ApiService,) { }

  ngOnInit(): void {
    
  }
  addDetails(){
    this.api.isNew =true;
  }
}
