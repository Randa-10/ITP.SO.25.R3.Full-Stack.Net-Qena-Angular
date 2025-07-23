import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from '../Models/iuser';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class User {
  httphears={}
  //add new user
  constructor(private http:HttpClient ){
    this.httphears={
      heards:new HttpHeaders({
        "Content-Type":"application/json",
        // "Authorization"
      })
    }

  }

  addNewUser(newUser:Iuser):Observable<Iuser>{
    //post(url,body,headrs)
    return this.http.post<Iuser>(`${environment.baseUrl}users`,newUser,this.httphears)
  }
}


// fetch(url,{
//   method,body,headrs
// })