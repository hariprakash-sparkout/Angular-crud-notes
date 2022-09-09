import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  idDetails: any=0;
  isNew:any;
  isShowSave !: boolean;
  isShowUpdate !: boolean;

  //post form data to the API
  postDetails(data: any) {
    return this.http.post<any>('http://localhost:3000/posts', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  //get All form data from API
  getDetails() {
    return this.http.get<any>('http://localhost:3000/posts').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  //update form data to the pre existing form data through API
  updateDetails(id: any, data: any) {
    return this.http.patch<any>('http://localhost:3000/posts/' + id, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  //Delete the particular form data using id 
  deleteDetails(id: number) {
    return this.http.delete<any>('http://localhost:3000/posts/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  //set id to the local variable 
  editUsers(id: number) {
    console.log('id',id)
    this.idDetails = id;
   
  }

  // get partcular form data using id through API
  getEditUserDetails() {
    console.log(this.idDetails)
    return this.http
      .get<any>('http://localhost:3000/posts/' + this.idDetails)
      .pipe((res: any) => {
        return res;
      });
      
  }
}
