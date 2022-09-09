import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs';

import { Note } from './api.module';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  form:Note[]=new Array<Note>();
  constructor(private http: HttpClient) {}
  idDetails: any=0;
  isNew:any;
  isShowSave !: boolean;
  isShowUpdate !: boolean;
  
  postDetails(data: any) {
    // return this.http.post<any>('http://localhost:3000/posts', data).pipe(
    //   map((res: any) => {
    //     return res;
    //   })
    // );
    this.form.push(data)
  }
  getDetails() {
    return this.form
    // return this.http.get<any>('http://localhost:3000/posts').pipe(
    //   map((res: any) => {
    //     return res;
    //   })
    // );
  }
  updateDetails(id: any, data: any) {
    let form =this.form[id]
    form.name = data.name;
    form.email = data.email;
    form.contact = data.contact;
    form.salary = data.salary
    return this.form[id]
    // return this.http.patch<any>('http://localhost:3000/posts/' + id, data).pipe(
    //   map((res: any) => {
    //     return res;
    //   })
    // );
  }
  deleteDetails(id: number) {
    return this.form.splice(id,1)
    // return this.http.delete<any>('http://localhost:3000/posts/' + id).pipe(
    //   map((res: any) => {
    //     return res;
    //   })
    // );
  }
  editUsers(id: number) {
    console.log('id',id)
    this.idDetails = id;
   
  }
  getEditUserDetails() {
    return this.form[this.idDetails]
  //   console.log(this.idDetails)
  //   return this.http
  //     .get<any>('http://localhost:3000/posts/' + this.idDetails)
  //     .pipe((res: any) => {
  //       return res;
  //     });
      
  // }
  }
}
