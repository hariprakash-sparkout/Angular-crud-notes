import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs';
import { identifierName } from '@angular/compiler';
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
    return this.http.post<any>('http://localhost:3000/posts', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  getDetails() {
    return this.http.get<any>('http://localhost:3000/posts').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  updateDetails(id: any, data: any) {
    return this.http.patch<any>('http://localhost:3000/posts/' + id, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  deleteDetails(id: number) {
    return this.http.delete<any>('http://localhost:3000/posts/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  editUsers(id: number) {
    console.log('id',id)
    this.idDetails = id;
   
  }
  getEditUserDetails() {
    console.log(this.idDetails)
    return this.http
      .get<any>('http://localhost:3000/posts/' + this.idDetails)
      .pipe((res: any) => {
        return res;
      });
      
  }
}
