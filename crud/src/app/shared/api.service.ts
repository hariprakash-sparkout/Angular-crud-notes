import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs';
import { identifierName } from '@angular/compiler';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  idDetails: any;
  isNew:any=true;
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
    return this.http.put<any>('http://localhost:3000/posts/' + 1, data).pipe(
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
    this.idDetails = id;
  }
  getEditUserDetails() {
    this.isNew=false;
    return this.http
      .get<any>('http://localhost:3000/posts/' + this.idDetails)
      .pipe((res: any) => {
        return res;
      });
      
  }
}
